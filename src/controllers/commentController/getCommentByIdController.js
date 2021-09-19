const db = require("../../db");
const respond = require("../../helpers/respond");
const { getCommentsIdSchema } = require("../../helpers/validate");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { error } = getCommentsIdSchema.validate({ id });
  if (error) {
    return respond(res, error.message, 400);
  }
  try {
    const result = await db("comments").where({ id }).select("*");

    if (!result.length) {
      return respond(res, "could not find that comment", 400);
    }
    return respond(res, result, 200);
  } catch (error) {
    const errMessage = "Something went wrong";
    return respond(res, errMessage, 500);
  }
};
