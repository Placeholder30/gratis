const express = require("express");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
const routes = require("./routes");
const respond = require("./helpers/respond");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined"));

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  respond(res, 200, { message: "welcome to the gratis digital home endpoint" });
});

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`app is now listening on ${port}`);
});
