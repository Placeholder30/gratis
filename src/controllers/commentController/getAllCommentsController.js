const db = require("../../db");
const respond = require("../../helpers/respond");

module.exports = async (req, res) => {
  try {
    const result = await db("comments");
    if (!result.length) {
      respond(res, "please seed the database", 400);
      return;
    } else {
      respond(res, result, 200);
    }
  } catch (error) {
    respond(res, "something went wrong");
  }
};
