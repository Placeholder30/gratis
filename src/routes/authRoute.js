const express = require("express");

const authRoute = express.Router();

authRoute.post("/signup", (req, res) => {});

authRoute.post("/signin", (req, res) => {});

authRoute.post("/signout", (req, res) => {});

module.exports = authRoute;
