const express = require("express");
const router = express.Router();

router.use("/feeds", require("./feeds"));

module.exports = router;
