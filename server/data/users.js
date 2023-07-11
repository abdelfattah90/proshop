import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'ahmed@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Youssef',
    email: 'youssef@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ali',
    email: 'ali@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
