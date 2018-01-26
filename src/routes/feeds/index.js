const express = require("express");
const router = express.Router();

router.use("/medium", require("./medium"));
router.use("/echojs", require("./echojs"));

module.exports = router;
