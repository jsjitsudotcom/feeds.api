const express = require("express");
const router = express.Router();

router.use("/", require("./get.feeds"));
router.use("/", require("./post.feeds"));

module.exports = router;
