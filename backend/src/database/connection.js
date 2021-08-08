const knex = require('knex');
const configuration = require('../../knexfile');

/* knexfile.js */
const connection = knex(configuration.development);

module.exports = connection;