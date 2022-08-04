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

  res.status(201).json({
    success: true,
    message: 'created',
    data: newUser,
  });
};

module.exports = {
  createUser,
};
