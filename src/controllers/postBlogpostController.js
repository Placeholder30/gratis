const db = require("../db");
const respond = require("../helpers/respond");

module.exports = async (req, res) => {
  const { title, post } = req.body;
  try {
    const result = await db("blogposts").insert({ title, post }).returning("*");
    console.log(result);
    respond(res, result, 201);
  } catch (error) {
    respond(res, "internal server error", 500);
  }
};
