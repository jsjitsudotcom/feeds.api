const express = require("express");
const router = express.Router();
const Echojs = require("./../../utils/echojs");

router.get("/", (req, res, next) => {
  return Echojs()
    .then(response => res.json(response))
    .catch(next);
});

module.exports = router;
