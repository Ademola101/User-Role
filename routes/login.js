const loginRouter = require('express').Router();
const { loginController, adminLogin, staffLogin} = require('../controller/login');

loginRouter.post('/user', loginController);
loginRouter.post('/admin', adminLogin);
loginRouter.post('/staff', staffLogin);

module.exports = loginRouter;
