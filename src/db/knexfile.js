// Update with your config settings.
require("dotenv").config();
const { knexSnakeCaseMappers } = require("objection");
module.exports = {
  client: "postgresql",
  connection: {
    database: "gratis_db",
    user: process.env.POSTGRES_USER || "malik",
    password: process.env.PASSWORD || "1234",
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
