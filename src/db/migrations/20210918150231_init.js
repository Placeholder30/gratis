exports.up = async function (knex) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema
    .createTable("blogposts", (table) => {
      table.increments("id", { primaryKey: true });
      table
        .uuid("uuid")
        .unique()
        .notNullable()
        .defaultTo(knex.raw("uuid_generate_v4()"));

      table.string("title").notNullable().unique();
      table.string("post").notNullable();
      table.timestamps(true, true);
    })
    .createTable("comments", (table) => {
      table.increments("id", { primaryKey: true });
      table
        .uuid("uuid")
        .unique()
        .notNullable()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.string("comment");
      table
        .integer("blogpostId")
        .references("id")
        .inTable("blogposts")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("comments")
    .dropTableIfExists("blogposts");
};
