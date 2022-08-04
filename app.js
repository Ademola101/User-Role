const express = require('express');
require('dotenv').config();

const app = express();
require('express-async-errors');
const mongose = require('mongoose');

const { MONGODB_URI } = process.env;

mongose.connect(MONGODB_URI).then(() => {
  console.log('coonected to db');
}).catch((err) => console.log(err));

module.exports = app;
