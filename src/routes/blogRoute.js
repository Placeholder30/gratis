const express = require("express");
const getAllBlogpostController = require("../controllers/getAllBlogpostController");
const getBlogpostByIdController = require("../controllers/getBlogpostByIdController");
const postBlogpostController = require("../controllers/postBlogpostController");
const putBlogpostController = require("../controllers/putBlogpostController");
const db = require("../db");
const respond = require("../helpers/respond");

const blogRoute = express.Router();

blogRoute.get("", getAllBlogpostController);

blogRoute.get("/:id", getBlogpostByIdController);

blogRoute.post("", postBlogpostController);

blogRoute.put("", putBlogpostController);

blogRoute.delete("", (req, res) => {
  // delete a blog post
});

module.exports = blogRoute;
