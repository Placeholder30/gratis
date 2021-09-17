exports.up = function (knex) {
  return knex.schema
    .createTable("blogposts", (table) => {
      table.increments("id", { primaryKey: true });
      table.uuid("uuid").unique().notNullable();
      table.string("title").notNullable().unique();
      table.string("post").notNullable();
      table.timestamps(true, true);
    })
    .createTable("comments", (table) => {
      table.increments("id", { primaryKey: true });
      table.uuid("uuid").unique().notNullable();
      table.string("comment");
      table
        .integer("blogpostId")
        .references("id")
        .inTable("blogposts")
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
