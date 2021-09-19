const db = require("../../db");
const respond = require("../../helpers/respond");
const { postCommentsSchema } = require("../../helpers/validate");

module.exports = async (req, res) => {
  const { comment, blogpostId } = req.body;
  const { error } = postCommentsSchema.validate({ comment, blogpostId });
  if (error) {
    respond(res, error.message, 400);
    return;
  }
  try {
    const result = await db("comments")
      .insert({ comment, blogpostId })
      .returning("*");
    respond(res, result, 201);
  } catch (error) {
    console.log(error);
    respond(res, "something went wrong", 500);
  }
};
