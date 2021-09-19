const db = require("../../db");
const respond = require("../../helpers/respond");
const { putBlogpostSchema } = require("../../helpers/validate");

module.exports = async (req, res) => {
  const { id, post } = req.body;
  const { error } = putBlogpostSchema.validate({
    id,
    post,
  });

  if (error) {
    return respond(res, error.message, 400);
  }
  try {
    const result = await db("blogposts")
      .where({ id })
      .update({ post })
      .returning("*");
    if (!result.length) {
      return respond(res, "could not find a blogpost with that id", 400);
    }
    respond(res, result, 200);
  } catch (error) {
    return respond(res, "something went wrong", 500);
  }
};
