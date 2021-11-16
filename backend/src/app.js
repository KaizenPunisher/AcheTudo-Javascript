const express = require('express');
require('dotenv').config({
    path: process.env.NODE_ENV ===  'test' ? '.env.test' : '.env'
});
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');

/*
require('dotenv').config({
    path: process.env.NODE_ENV ===  'test' ? '.env.test' : '.env'
})
*/
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;