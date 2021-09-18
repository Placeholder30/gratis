const db = require("../db");
const respond = require("../helpers/respond");

module.exports = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await db("blogposts").where({ id }).del("*");
    if (!result.length) {
      respond(res, "could not find post with that id", 400);
    }
    respond(res, result, 200);
  } catch (error) {
    respond(res, "something went wrong", 500);
  }
};
