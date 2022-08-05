const loginRouter = require('express').Router();
const { loginController, adminLogin } = require('../controller/login');

loginRouter.post('/user', loginController);
loginRouter.post('/admin', adminLogin);

module.exports = loginRouter;
