const bcrypt = require('bcryptjs');

module.exports.users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'niloy',
    email: 'niloy@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Test',
    email: 'test@gmail.com',
    password: bcrypt.hashSync('', 10),
  },
];
