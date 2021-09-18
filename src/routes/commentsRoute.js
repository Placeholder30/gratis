const express = require("express");
const deleteCommentController = require("../controllers/commentController/deleteCommentController");
const getAllCommentsController = require("../controllers/commentController/getAllCommentsController");
const getCommentByIdController = require("../controllers/commentController/getCommentByIdController");
const postCommentController = require("../controllers/commentController/postCommentController");
const putCommentController = require("../controllers/commentController/putCommentController");

const commentsRoute = express.Router();

commentsRoute.get("", getAllCommentsController);

commentsRoute.get("/:id", getCommentByIdController);

commentsRoute.post("", postCommentController);
commentsRoute.put("", putCommentController);

commentsRoute.delete("", deleteCommentController);

module.exports = commentsRoute;
