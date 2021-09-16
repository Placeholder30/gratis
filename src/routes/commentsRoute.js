const express = require("express");

const commentsRoute = express.Router();

commentsRoute.get("", (req, res) => {
  //fetch all comments from db
});

commentsRoute.get("/:id", (req, res) => {
  // get a comment with id
});

commentsRoute.post("", (req, res) => {
  //create a comment
});
commentsRoute.put("", (req, res) => {
  //edit a comment
});

commentsRoute.delete("", (req, res) => {
  //delete a comment
});

module.exports = commentsRoute;
