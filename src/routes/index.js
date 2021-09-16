const express = require("express");
const authRoute = require("./authRoute");
const blogRoute = require("./blogRoute");
const commentsRoute = require("./commentsRoute");

const router = express.Router();

router.use("/auth", authRoute);
router.use("/blog", blogRoute);
router.use("/comments", commentsRoute);
module.exports = router;
