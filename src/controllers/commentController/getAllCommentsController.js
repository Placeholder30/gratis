const db = require("../../db");
const respond = require("../../helpers/respond");

module.exports = async (req, res) => {
  try {
    const result = await db("comments").select("*");
    if (!result.length) {
      return respond(res, "there are no comments, why don't you add one?", 200);
    } else {
      return respond(res, result, 200);
    }
  } catch (error) {
    return respond(res, "something went wrong", 500);
  }
};
