// Simple in-memory user database
// In a real application, this would be stored in a secure database
// and passwords would be hashed

const users = [
  {
    id: 1,
    username: 'admin',
    password: 'password',
    name: 'Admin User',
    role: 'admin',
    email: 'admin@example.com',
    department: 'IT',
    joinDate: '2020-01-15',
    lastLogin: '2023-05-01T08:30:45Z',
    permissions: ['read', 'write', 'delete', 'admin'],
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    username: 'john',
    password: 'john123',
    name: 'John Doe',
    role: 'user',
    email: 'john@example.com',
    department: 'Marketing',
    joinDate: '2021-03-22',
    lastLogin: '2023-04-28T14:15:22Z',
    permissions: ['read', 'write'],
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 3,
    username: 'jane',
    password: 'jane123',
    name: 'Jane Smith',
    role: 'user',
    email: 'jane@example.com',
    department: 'Finance',
    joinDate: '2021-05-18',
    lastLogin: '2023-04-30T09:45:12Z',
    permissions: ['read', 'write'],
    profileImage: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    id: 4,
    username: 'guest',
    password: 'guest',
    name: 'Guest User',
    role: 'guest',
    email: 'guest@example.com',
    department: 'N/A',
    joinDate: '2022-11-05',
    lastLogin: '2023-04-15T11:22:33Z',
    permissions: ['read'],
    profileImage: 'https://randomuser.me/api/portraits/lego/1.jpg'
  },
  {
    id: 5,
    username: 'sarah',
    password: 'sarah456',
    name: 'Sarah Johnson',
    role: 'manager',
    email: 'sarah@example.com',
    department: 'Human Resources',
    joinDate: '2019-08-12',
    lastLogin: '2023-05-01T10:12:45Z',
    permissions: ['read', 'write', 'approve'],
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 6,
    username: 'michael',
    password: 'mike789',
    name: 'Michael Brown',
    role: 'developer',
    email: 'michael@example.com',
    department: 'Engineering',
    joinDate: '2020-06-23',
    lastLogin: '2023-04-29T16:40:10Z',
    permissions: ['read', 'write', 'debug'],
    profileImage: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 7,
    username: 'emma',
    password: 'emma321',
    name: 'Emma Wilson',
    role: 'designer',
    email: 'emma@example.com',
    department: 'Design',
    joinDate: '2021-02-14',
    lastLogin: '2023-04-27T13:25:55Z',
    permissions: ['read', 'write', 'design'],
    profileImage: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    id: 8,
    username: 'david',
    password: 'david456',
    name: 'David Clark',
    role: 'analyst',
    email: 'david@example.com',
    department: 'Business Intelligence',
    joinDate: '2020-11-30',
    lastLogin: '2023-04-30T15:10:20Z',
    permissions: ['read', 'analyze'],
    profileImage: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {
    id: 9,
    username: 'olivia',
    password: 'olivia789',
    name: 'Olivia Martinez',
    role: 'support',
    email: 'olivia@example.com',
    department: 'Customer Support',
    joinDate: '2022-01-10',
    lastLogin: '2023-05-01T09:05:30Z',
    permissions: ['read', 'support'],
    profileImage: 'https://randomuser.me/api/portraits/women/8.jpg'
  },
  {
    id: 10,
    username: 'james',
    password: 'james123',
    name: 'James Taylor',
    role: 'intern',
    email: 'james@example.com',
    department: 'Marketing',
    joinDate: '2023-01-05',
    lastLogin: '2023-04-28T11:30:15Z',
    permissions: ['read'],
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg'
  }
];

// Function to find a user by username
function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

// Function to authenticate a user
function authenticateUser(username, password) {
  const user = findUserByUsername(username);
  if (!user) {
    return { success: false, message: 'User not found' };
  }

  if (user.password !== password) {
    return { success: false, message: 'Invalid password' };
  }

  // Don't include password in the returned user object
  const { password: _, ...userWithoutPassword } = user;
  return {
    success: true,
    message: 'Login successful',
    user: userWithoutPassword
  };
}

module.exports = {
  findUserByUsername,
  authenticateUser
};
