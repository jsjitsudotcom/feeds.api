const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

const index = require("./routes/index");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", index);

app.use(function(req, res, next) {
  return res.status(400).json({ message, stack });
});

app.use(function({ message, stack }, req, res, next) {
  res.status(err.status || 500);
  return res.json({ message, stack });
});

module.exports = app;
