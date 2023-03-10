// Update with your config settings.
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host :     'localhost',
      port :     '5432',
      database : 'db',
      user :     'postgres',
      password : '213254'
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
};