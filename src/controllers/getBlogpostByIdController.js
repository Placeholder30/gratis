const db = require("../db");
const respond = require("../helpers/respond");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db("blogposts").where({ id }).select("*");

    if (!result.length) {
      respond(res, "could not find that user", 400);
      return;
    }
    respond(res, result, 200);
  } catch (error) {
    const errMessage = "Something went wrong";
    respond(res, errMessage, 500);
  }
  //get a blog from db by id
};
