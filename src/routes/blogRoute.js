const express = require("express");

const blogRoute = express.Router();

blogRoute.get("", (req, res) => {
  // fetch all blogs from db
  if (req.query.page && req.query.limit) {
    //implement pagination
  }
});

blogRoute.get("/:id", (req, res) => {
  //get a blog from db by id
});

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
