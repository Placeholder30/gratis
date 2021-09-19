const db = require("../../db");
const respond = require("../../helpers/respond");
const { postBlogpostSchema } = require("../../helpers/validate");

module.exports = async (req, res) => {
  const { title, post } = req.body;
  const { error } = postBlogpostSchema.validate({
    title,
    post,
  });
  if (error) {
    return respond(res, error.message, 400);
  }
  try {
    const isExist = await db("blogposts").where({ title }); //check if title already exists
    if (!isExist.length) {
      const result = await db("blogposts")
        .insert({ title, post })
        .returning("*");
      return respond(res, result, 201);
    } else {
      return respond(res, "a post with that title already exists", 400);
    }
  } catch (error) {
    console.log(error);
    return respond(res, "something went wrong", 500);
  }
};
