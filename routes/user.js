const router = require('express').Router();
const { createUser } = require('../controller/User');

const userRouter = router.post('/', createUser);

module.exports = userRouter;
