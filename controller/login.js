const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const loginController = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(passwordCorrect && user)) {
    res.status(401).json({
      error: 'invalid password',
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).json({
    token, username: user.username, name: user.name,
  });
};

const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    res.status(404).json({
      error: 'User not found',
    });
  }
  if (user.role !== 'admin') {
    res.status(401).json({
      error: 'Unauthorized, Only admin can acess this page',
    });
  }
  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(passwordCorrect && user)) {
    res.status(401).json({
      error: 'invalid password',
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,

  };
  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).json({
    token, username: user.username, name: user.name,
  });
};

const managerLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    res.status(404).json({
      error: 'User not found',
    });
  }
  if (user.role !== 'manager') {
    res.status(401).json({
      error: 'Unauthorized, Only managers can acess this page',
    });
  }
  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(passwordCorrect && user)) {
    res.status(401).json({
      error: 'invalid password',
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,

  };
  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).json({
    token, username: user.username, name: user.name,
  });
};
const staffLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    res.status(404).json({
      error: 'User not found',
    });
  }
  if (user.role !== 'staff') {
    res.status(401).json({
      error: 'Unauthorized, Only staffs can acess this page',
    });
  }
  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(passwordCorrect && user)) {
    res.status(401).json({
      error: 'invalid password',
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,

  };
  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).json({
    token, username: user.username, name: user.name,
  });
};
module.exports = {
  loginController, adminLogin, managerLogin, staffLogin,
};
