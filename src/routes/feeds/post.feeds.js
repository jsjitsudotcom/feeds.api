const express = require("express");
const URL = require("url-parse");
const fetchFeed = require("../../api/rss/fetchFeed");
const Joi = require("joi");

const router = express.Router();
const insertFeed = require("../../models/feed/insertFeed");

const bodySchema = Joi.object({
  rss_url: Joi.string()
    .uri()
    .required()
}).required();

const hasGoodBody = (req, res, next) => {
  try {
    Joi.assert(req.body, bodySchema);
    return next();
  } catch (e) {
    next({
      message: "[Query/Body] data validation error",
      description: e.details
    });
  }
};

const isValidRssFeed = (req, res, next) => {
  fetchFeed
    .execute(req.rss_url)
    .then(() => next())
    .catch(() => {
      return next({ message: "The rss url is not a rss feed" });
    });
};

const getBaseUrl = url => {
  const { host, protocol } = new URL(url);
  return `${protocol}//${host}`;
};

router.post("/", hasGoodBody, isValidRssFeed, (req, res) => {
  const { rss_url } = req.body;
  const website_url = getBaseUrl(rss_url);

  return insertFeed.execute({ rss_url, website_url }).then(feed => {
    res.json(feed);
  });
});

module.exports = router;
