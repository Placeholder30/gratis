const express = require("express");
const getAllBlogpostController = require("../controllers/getAllBlogpostController");
const getBlogpostByIdController = require("../controllers/getBlogpostByIdController");
const db = require("../db");
const respond = require("../helpers/respond");

const blogRoute = express.Router();

blogRoute.get("", getAllBlogpostController);

blogRoute.get("/:id", getBlogpostByIdController);

blogRoute.post("", (req, res) => {
  //create a blog post
});

blogRoute.put("", (req, res) => {
  //edit a blog post
});

blogRoute.delete("", (req, res) => {
  // delete a blog post
});

module.exports = blogRoute;
