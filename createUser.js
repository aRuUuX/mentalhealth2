// createUser.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const connectMongo = require('./lib/mongodb');

async function createUser(username, plainPassword) {
  await connectMongo();

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(plainPassword, salt);

  const user = new User({ username, password: hashedPassword });
  await user.save();
  console.log('User created');
}

createUser('your_username', 'your_password').catch(console.error);
