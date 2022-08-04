const bcrypt = require('bcrypt');
const User = require('../models/User');

const createUser = async (req, res) => {
  const { username, name, password } = req.body;

  const saltround = 10;
  const passwordHash = await bcrypt.hash(password, saltround);

  const newUser = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await newUser.save();
  res.status(201).json({
    success: true,
    message: 'created',
    data: savedUser,
  });
};

module.exports = {
  createUser,
};
