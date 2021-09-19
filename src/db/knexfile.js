// Update with your config settings.
require("dotenv").config();
const { knexSnakeCaseMappers } = require("objection");
const config = require("../config/config");
module.exports = {
  client: "postgresql",
  connection: {
    host: config.host,
    port: config.port,
    user: config.user,
    database: config.database,
    password: config.password,
    ssl: {
      rejectUnauthorized: false,
    },
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
