const express = require("express");
const router = express.Router();
const findDefaultFeeds = require("../../models/feed/findDefaultFeeds");

router.get("/", (req, res, next) => {
  if (!req.user)
    return findDefaultFeeds.execute().then(feeds => res.json(feeds));
});

router.get("/:id", (req, res, next) => {
  // Get articles from a feed
});

module.exports = router;
