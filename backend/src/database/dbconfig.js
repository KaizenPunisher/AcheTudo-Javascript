const db = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.PGDATABASE,
    user: process.env.PGUSER,
    pass: process.env.PGPASSWORD
}

export default db;