const knex = require('knex');
const configuration = require('../../knexfile');

//const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.production;
//const config = configuration.production;
/* knexfile.js */
//const connection = knex(config);
const connection = knex({
    development: {
        client: 'pg',
        connection: {
            host :     process.env.DB_HOST,
            port :     process.env.DB_PORT,
            database : process.env.DB_NAME,
            user :     `${process.env.DB_USER}`,
            password : `${process.env.DB_PASS}`
            
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/database/migrations'
        }
    },

    test: {
    client: process.env.DB_CLI,
        connection: {
            host :     `${process.env.DB_HOST}`,
            port :     `${process.env.DB_PORT}`,
            database : `${process.env.DB_NAME}`,
            user :     `${process.env.DB_USER}`,
            password : `${process.env.DB_PASS}`,
            ssl: {
            require: true,
            rejectUnauthorized: false
            },
            sslfactory: 'org.postgresql.ssl.NonValidatingFactory'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/database/migrations'
        }
    },

    staging: {
        client: process.env.DB_CLI,
        connection: {
            host :     `${process.env.DB_HOST}`,
            port :     `${process.env.DB_PORT}`,
            database : `${process.env.DB_NAME}`,
            user :     `${process.env.DB_USER}`,
            password : `${process.env.DB_PASS}`,
            ssl: {
            require: true,
            rejectUnauthorized: false
            },
            sslfactory: 'org.postgresql.ssl.NonValidatingFactory'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/database/migrations'
        }
    },

    production: {
        client: process.env.DB_CLI,
        connection: {
            host :     `${process.env.DB_HOST}`,
            port :     `${process.env.DB_PORT}`,
            database : `${process.env.DB_NAME}`,
            user :     `${process.env.DB_USER}`,
            password : `${process.env.DB_PASS}`,
            ssl: {
            require: true,
            rejectUnauthorized: false
            },
            sslfactory: 'org.postgresql.ssl.NonValidatingFactory'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/database/migrations'
        }
    }
});

module.exports = connection;