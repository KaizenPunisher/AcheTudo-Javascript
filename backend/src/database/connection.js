const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.production;
//const config = configuration.production;
/* knexfile.js */
const connection = knex(config);

module.exports = connection;