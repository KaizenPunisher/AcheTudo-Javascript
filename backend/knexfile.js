// Update with your config settings.
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host :     `${process.env.DB_HOST}`,
      port :     `${process.env.DB_PORT}`,
      database : `${process.env.DB_NAME}`,
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
    client: 'pg',
    connection: {
      host :     `${process.env.DB_HOST}`,
      port :     `${process.env.DB_PORT}`,
      database : `${process.env.DB_NAME}`,
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

  staging: {
    client: 'pg',
    connection: {
      host :     `${process.env.DB_HOST}`,
      port :     `${process.env.DB_PORT}`,
      database : `${process.env.DB_NAME}`,
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

  production: {
    client: 'pg',
    connection: {
      host :     `${process.env.DB_HOST}`,
      port :     `${process.env.DB_PORT}`,
      database : `${process.env.DB_NAME}`,
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
  }
};