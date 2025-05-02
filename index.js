const express = require('express');
const { resolve } = require('path');
const bodyParser = require('body-parser');
const { authenticateUser } = require('./data/users');

const app = express();
const port = 3010;

// Middleware
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Simple logging middleware
app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.get('/', (_req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Login page route
app.get('/login', (_req, res) => {
  res.sendFile(resolve(__dirname, 'pages/login.html'));
});

// Login form submission handler
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Use the authentication function from our data module
  const result = authenticateUser(username, password);

  if (result.success) {
    res.json(result);
  } else {
    res.status(401).json(result);
  }
});

// Dashboard route (protected)
app.get('/dashboard', (_req, res) => {
  // In a real application, you would check for authentication here
  res.sendFile(resolve(__dirname, 'pages/dashboard.html'));
});

// Error handling middleware
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404 handler for undefined routes
app.use((_req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(`Visit http://localhost:${port}/login to see the login page`);
});
