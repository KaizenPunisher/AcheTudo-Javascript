// Update with your config settings.
module.exports = {
  development: {
    client: 'pg',
    version: '7.2',
    connection: {
      host :    'localhost',
      port :    5432,
      database: 'db',
      user:     'postgres',
      password: '213254'
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
    version: '7.2',
    connection: {
      host :    'localhost',
      port :    5432,
      database: 'db',
      user:     'postgres',
      password: '213254'
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
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'postgresql',
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