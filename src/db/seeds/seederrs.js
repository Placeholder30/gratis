const faker = require("faker");
const { array } = require("joi");
const { v4: uuidv4 } = require("uuid");
exports.seed = async function (knex) {
  await knex.raw('TRUNCATE TABLE "blogposts" CASCADE');
  await knex.raw('TRUNCATE TABLE "comments" CASCADE');
  // Deletes ALL existing entries
  const fakeArray = [];

  for (let i = 0; i < 200; i++) {
    fakeArray.push({
      uuid: uuidv4(),
      title: faker.random.words(4),
      post: faker.lorem.words(20),
    });
  }
  return await knex("blogposts").insert([
    {
      uuid: uuidv4(),
      title: "john doe",
      post: "this is the story of a man named john doe",
    },
    {
      uuid: uuidv4(),
      title: "uzumaki naruto",
      post: "this is the story of the 7th hokage of konoha",
    },
    ...fakeArray,
  ]);
};
