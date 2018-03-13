const express = require("express");
const router = express.Router();
const read = require("read-art");

router.get("/", (req, res, next) => {
  const { url } = req.query;

  return read(url)
    .then(article => ({
      title: article.getTitle(),
      content: article.getContent()
    }))
    .then(response => res.json(response))
    .catch(next);
});

module.exports = router;
