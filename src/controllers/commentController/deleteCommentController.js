const db = require("../../db");
const respond = require("../../helpers/respond");
const { deleteCommentsSchema } = require("../../helpers/validate");

module.exports = async (req, res) => {
  const { id } = req.body;
  const { error } = deleteCommentsSchema.validate({ id });
  if (error) {
    return respond(res, error.message, 400);
  }
  try {
    const result = await db("comments").where({ id }).del("*");
    if (!result.length) {
      return respond(res, `could not find comment with id ${id}`, 400);
    }
    return respond(res, result, 200);
  } catch (error) {
    return respond(res, "something went wrong", 500);
  }
};
