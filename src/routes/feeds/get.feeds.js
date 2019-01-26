const express = require("express");
const router = express.Router();
const FindDefaultFeeds = require("../../models/feed/FindDefaultFeeds");
const FindFeedsOfUser = require("../../models/feed/FindFeedsOfUser");
const jwt = require("../../utils/jwt");

router.get("/", (req, res, next) => {
  return FindDefaultFeeds.execute()
    .then(feeds => res.json(feeds))
    .catch(next);
});

router.get("/me", jwt.use(), (req, res, next) => {
  const user_id = req.user.id;
  return FindFeedsOfUser.execute({ user_id })
    .then(feeds => res.json(feeds))
    .catch(next);
});

module.exports = router;
