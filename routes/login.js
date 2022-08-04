const loginRouter = require('express').Router();
const login = require('../controller/login');

loginRouter.post('/', login);

module.exports = loginRouter;
