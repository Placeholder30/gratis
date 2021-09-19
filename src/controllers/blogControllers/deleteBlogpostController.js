const db = require("../../db");
const respond = require("../../helpers/respond");
const { deleteBlogpostSchema } = require("../../helpers/validate");

module.exports = async (req, res) => {
  const { id } = req.body;
  const { error } = deleteBlogpostSchema.validate({ id });
  if (error) {
    return respond(res, error.message, 400);
  }
  try {
    const result = await db("blogposts").where({ id }).del("*");
    if (!result.length) {
      return respond(res, `could not find post with that id${id}`, 400);
    }
    respond(res, result, 200);
  } catch (error) {
    return respond(res, "something went wrong", 500);
  }
};
