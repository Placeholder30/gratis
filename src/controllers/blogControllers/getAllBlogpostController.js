const db = require("../../db");
const respond = require("../../helpers/respond");

module.exports = async (req, res) => {
  // fetch all blogs from db
  if (req.query.page && req.query.limit) {
    //implement pagination
    return;
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
