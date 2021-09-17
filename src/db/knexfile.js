// Update with your config settings.
require("dotenv").config();
const { DEV_USER, DEV_PASSWORD } = process.env;
const { knexSnakeCaseMappers } = require("objection");
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "gratis_db",
      user: "malik",
      password: 1234,
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
  },

  production: {
    client: "postgresql",
    connection: {
      database: "gratis_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    ...knexSnakeCaseMappers,
  },
};
