const db = require("../../db");
const respond = require("../../helpers/respond");
const { postBlogpostSchema } = require("../../helpers/validata");

module.exports = async (req, res) => {
  const { title, post } = req.body;
  const { error } = postBlogpostSchema.validate({
    title,
    post,
  });
  if (error) {
    respond(res, error.message, 400);
    return;
  }
  try {
    const isExist = await db("blogposts").where({ title }); //check if title already exists
    if (!isExist.length) {
      const result = await db("blogposts")
        .insert({ title, post })
        .returning("*");
      respond(res, result, 201);
    } else {
      respond(res, "a post with that title already exists", 400);
    }
  } catch (error) {
    console.log(error);
    respond(res, "something went wrong", 500);
  }
};
