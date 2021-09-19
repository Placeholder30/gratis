const db = require("../../db");
const respond = require("../../helpers/respond");
const { putBlogpostSchema } = require("../../helpers/validata");

module.exports = async (req, res) => {
  const { id, title, post } = req.body;
  const { error } = putBlogpostSchema({
    id,
    title,
    post,
  });
  if (error) {
    respond(res, error.message, 400);
  }
  try {
    const result = await db("blogposts")
      .where({ id })
      .update({ title, post })
      .returning("*");
    if (!result.length) {
      respond(res, "could not find a blogpost with that id", 400);
      return;
    }
    respond(res, result, 200);
  } catch (error) {
    respond(res, "something went wrong", 500);
  }
};
