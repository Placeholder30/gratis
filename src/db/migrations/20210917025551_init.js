exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.uuid("uuid").unique().notNullable();
      table.string("username").notNullable();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.timestamps(true, true);
    })
    .createTable("blogposts", (table) => {
      table.uuid("uuid").unique().notNullable();
      table.string("title").notNullable().unique();
      table.string("post").notNullable();
      table
        .uuid("userId")
        .references("uuid")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(true, true);
    })
    .createTable("comments", (table) => {
      table.uuid("uuid").unique().notNullable();
      table.string("comment");
      table
        .uuid("blogpostId")
        .references("uuid")
        .inTable("blogposts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("comments")
    .dropTableIfExists("blogposts")
    .dropTableIfExists("users");
};
