const db = require("../../db");
const respond = require("../../helpers/respond");

module.exports = async (req, res) => {
  const { comment, blogpostId } = req.body;
  try {
    const result = await db("comments")
      .insert({ comment, blogpostId })
      .returning("*");
    respond(res, result, 201);
  } catch (error) {
    console.log(error);
    respond(res, "something went wrong", 500);
  }
};
