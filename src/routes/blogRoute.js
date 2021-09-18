const express = require("express");
const deleteBlogpostController = require("../controllers/blogControllers/deleteBlogpostController");
const getAllBlogpostController = require("../controllers/blogControllers/getAllBlogpostController");
const getBlogpostByIdController = require("../controllers/blogControllers/getBlogpostByIdController");
const postBlogpostController = require("../controllers/blogControllers/postBlogpostController");
const putBlogpostController = require("../controllers/blogControllers/putBlogpostController");

const blogRoute = express.Router();

blogRoute.get("", getAllBlogpostController);

blogRoute.get("/:id", getBlogpostByIdController);

blogRoute.post("", postBlogpostController);

blogRoute.put("", putBlogpostController);

blogRoute.delete("", deleteBlogpostController);

module.exports = blogRoute;
