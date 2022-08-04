const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());
require('express-async-errors');
const mongose = require('mongoose');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');

const { MONGODB_URI } = process.env;
app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);
mongose.connect(MONGODB_URI).then(() => {
  console.log('coonected to db');
}).catch((err) => console.log(err));

module.exports = app;
