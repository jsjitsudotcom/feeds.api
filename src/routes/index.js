const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/feeds", require("./feeds"));
router.use("/articles", require("./articles"));

module.exports = router;
