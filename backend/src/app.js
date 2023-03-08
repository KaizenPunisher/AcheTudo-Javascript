const express = require('express');
const path = require('path');
require('dotenv').config({
    path: process.env.NODE_ENV ===  'test' ? '.env.test' : '.env'
});
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');
const morgan = require('morgan');

/*
require('dotenv').config({
    path: process.env.NODE_ENV ===  'test' ? '.env.test' : '.env'
})
*/
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));// instrução para o express interpretar melhor requisições url encoded facilitando o envio de arquivos
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
app.use(routes);
app.use(errors());

module.exports = app;