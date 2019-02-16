const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const Raven = require("raven");
const VERSION = process.env.npm_package_version;
const index = require("./routes/index");
const { SENTRY_DSN } = require("./config");
const env = process.env.NODE_ENV;

const app = express();

if (env === "production")
  Raven.config(SENTRY_DSN, {
    release: VERSION
  }).install();
if (env === "production") app.use(Raven.requestHandler());

app.use(cors());
if (env !== "test") app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", index);

app.use(function(req, res) {
  return res.status(404).json({ message: "Not found" });
});

if (env === "production") app.use(Raven.errorHandler());

app.use(function({ message, stack, description }, req, res, next) {
  if (env === "production" || env === "test")
    return res.status(500).json({ message, description });
  return res.status(500).json({ message, description, stack });
});

module.exports = app;
