const { v4: uuidv4 } = require("uuid");
exports.seed = async function (knex) {
  await knex.raw('TRUNCATE TABLE "blogposts" CASCADE');
  await knex.raw('TRUNCATE TABLE "comments" CASCADE');
  await knex.raw('TRUNCATE TABLE "users" CASCADE');
  // Deletes ALL existing entries
  return await knex("users").insert([
    {
      uuid: uuidv4(),
      username: "john doe",
      email: "john@doe@gmail.com",
      password: "password1234",
    },
    {
      uuid: uuidv4(),
      username: "uzumaki naruto",
      email: "uzumakinaruto@gmail.com",
      password: "rasengan",
    },
    {
      uuid: uuidv4(),
      username: "eren jaeger",
      email: "erenjaeger@gmail.com",
      password: "foundingtitan",
    },
  ]);
};
