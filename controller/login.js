const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const loginController = async (req, res) => {
  const { username, password } = req.body;
  const user = User.findOne({ username });

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

module.exports = loginController;
