const db = require("../db");
const respond = require("../helpers/respond");

module.exports = async (req, res) => {
  // fetch all blogs from db
  if (req.query.page && req.query.limit) {
    //implement pagination
    return;
  }
  try {
    const result = await db("blogposts");
    respond(res, result, 200);
  } catch (error) {
    const errMessage = "no posts on the db...";
    respond(res, errMessage, 403);
  }
};
