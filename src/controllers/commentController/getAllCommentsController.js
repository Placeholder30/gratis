const db = require("../../db");
const respond = require("../../helpers/respond");

module.exports = async (req, res) => {
  try {
    const result = await db("comments").select("*");
    if (!result.length) {
      return respond(res, "please seed the database", 400);
    } else {
      return respond(res, result, 200);
    }
  } catch (error) {
    return respond(res, "something went wrong");
  }
};
