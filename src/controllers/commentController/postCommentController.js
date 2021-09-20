const db = require("../../db");
const respond = require("../../helpers/respond");
const { postCommentsSchema } = require("../../helpers/validate");

module.exports = async (req, res) => {
  const { comment, blogpostId } = req.body;
  const { error } = postCommentsSchema.validate({ comment, blogpostId });

  if (error) {
    return respond(res, error.message, 400);
  }
  try {
    const result = await db("comments")
      .insert({ comment, blogpostId })
      .returning("*");
    return respond(res, result, 201);
  } catch (error) {
    return respond(res, "something went wrong, please try again", 500);
  }
};
