// Update with your config settings.
require("dotenv").config();
const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  client: "postgresql",
  connection: {
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    ssl: { rejectUnauthorized: false },
  },

  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
  seeds: {
    directory: "seeds/",
  },
  ...knexSnakeCaseMappers,
};
