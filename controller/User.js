const bcrypt = require('bcrypt');
const User = require('../models/User');

const createUser = async (req, res) => {
  const { username, name, password } = req.body;
};
