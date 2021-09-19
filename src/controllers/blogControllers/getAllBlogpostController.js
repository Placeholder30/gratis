const db = require("../../db");
const respond = require("../../helpers/respond");
const { paginatedSchema } = require("../../helpers/validate");

module.exports = async (req, res) => {
  if (req.query.page && req.query.limit) {
    let { page, limit } = req.query;
    const { error } = paginatedSchema.validate({
      page,
      limit,
    });
    if (error) {
      respond(res, error.message, 400);
    }
    page = parseInt(page - 1) * 10;
    limit = parseInt(limit);
    try {
      const result = await db("blogposts").offset(page).limit(limit);
      if (!result.length) {
        respond(res, "out of range, not enough records", 400);
      }
      respond(res, result, 200);
      return;
    } catch (error) {
      respond(res, "an error occured", 500);
    }
  }
  try {
    const result = await db("blogposts");
    if (!result.length) {
      respond(
        res,
        "please seed the database with 'yarn seed' or create a blogpost with the '/blog' route",
        400
      );
      return;
    }
    respond(res, result, 200);
  } catch (error) {
    const errMessage = "something went wrong";
    respond(res, errMessage, 500);
  }
};
