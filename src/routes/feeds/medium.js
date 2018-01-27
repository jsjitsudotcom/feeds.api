const express = require("express");
const router = express.Router();
const Medium = require("./../../utils/medium");

router.get("/", (req, res, next) => {
  return Medium.getAll()
    .then(response => res.json(response))
    .catch(next);
});

module.exports = router;
