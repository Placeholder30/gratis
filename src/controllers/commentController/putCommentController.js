const db = require("../../db");
const respond = require("../../helpers/respond");
const { putCommentsSchema } = require("../../helpers/validate");

module.exports = async (req, res) => {
  const { id, comment } = req.body;
  const { error } = putCommentsSchema.validate({ id, comment });
  if (error) {
    return respond(res, error.message, 400);
  }
  try {
    const result = await db("comments")
      .where({ id })
      .update({ comment })
      .returning("*");
    if (!result.length) {
      return respond(res, "could not find a comment with that id", 400);
    }
    return respond(res, result, 200);
  } catch (error) {
    return respond(res, "something went wrong", 500);
  }
};
