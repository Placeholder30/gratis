const db = require("../db");
const respond = require("../helpers/respond");

module.exports = async (req, res) => {
  const { id, title, post } = req.body;
  //edit a blog post
  const result = await db("blogposts")
    .where({ id })
    .update({ title, post })
    .returning("*");
  respond(res, result, 200);
};
