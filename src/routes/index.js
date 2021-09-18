const express = require("express");
const blogRoute = require("./blogRoute");
const commentsRoute = require("./commentsRoute");

const router = express.Router();

router.use("/blog", blogRoute);
router.use("/comment", commentsRoute);
module.exports = router;
