const db = require("../../db");
const respond = require("../../helpers/respond");
const { getBlogpostIdSchema } = require("../../helpers/validate");

module.exports = async (req, res) => {
  const { id } = req.params;

  const { error } = getBlogpostIdSchema.validate({ id });
  if (error) {
    return respond(res, error.message, 400);
  }
  try {
    const result = await db("blogposts").where({ id }).select("*");

    if (!result.length) {
      return respond(res, `could not find that blog with id: ${id}`, 400);
    }
    respond(res, result, 200);
  } catch (error) {
    const errMessage = "Something went wrong";
    return respond(res, errMessage, 500);
  }
  //get a blog from db by id
};
