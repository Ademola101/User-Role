const loginRouter = require('express').Router();
const {
  loginController, adminLogin, staffLogin, managerLogin,
} = require('../controller/login');

loginRouter.post('/user', loginController);
loginRouter.post('/admin', adminLogin);
loginRouter.post('/staff', staffLogin);
loginRouter.post('/staff', managerLogin);

module.exports = loginRouter;
