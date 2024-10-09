const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-media-dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  { name: 'Admin User', email: 'admin@example.com', password: 'adminpassword', role: 'admin' },
  { name: 'Client User', email: 'client@example.com', password: 'clientpassword', role: 'client' },
  { name: 'Regular User', email: 'user@example.com', password: 'userpassword', role: 'user' },
];

async function addTestUsers() {
  try {
    for (const userData of users) {
      const existingUser = await User.findOne({ email: userData.email });
      if (existingUser) {
        console.log(`User ${userData.email} already exists`);
        continue;
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);

      const newUser = new User({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: userData.role,
      });

      await newUser.save();
      console.log(`User ${userData.email} added successfully`);
    }
  } catch (error) {
    console.error('Error adding test users:', error);
  } finally {
    mongoose.disconnect();
  }
}

addTestUsers();