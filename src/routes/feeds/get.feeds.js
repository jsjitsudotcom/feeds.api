const express = require("express");
const router = express.Router();
const findDefaultFeeds = require("../../models/feed/findDefaultFeeds");
const findFeedsOfUser = require("../../models/feed/findFeedsOfUser");
const jwt = require("../../utils/jwt");

router.get("/", (req, res, next) => {
  return findDefaultFeeds.execute().then(feeds => res.json(feeds));
});

router.get("/me", jwt.use(), (req, res, next) => {
  const user_id = req.user.id;
  return findFeedsOfUser.execute({ user_id }).then(feeds => res.json(feeds));
});

router.get("/:id", (req, res, next) => {
  // Get articles from a feed
});

module.exports = router;
