const express = require("express");
const router = express.Router();
const { FindUserByEmailAndPassword } = require("database");
const jwt = require("../../utils/jwt");

const hasEmail = (req, res, next) => {
  if (!req.body.email)
    return res.status(400).json({
      message: "Parameters validation failed",
      description: "You must provide an email"
    });

  return next();
};

const hasPassword = (req, res, next) => {
  if (!req.body.password)
    return res.status(400).json({
      message: "Parameters validation failed",
      description: "You must provide a password"
    });

  return next();
};

router.post("/", hasEmail, hasPassword, (req, res, next) => {
  const { email, password } = req.body;

  return FindUserByEmailAndPassword.execute({ email, password })
    .then(user => {
      if (!user)
        return res
          .status(400)
          .json({ message: "The credentials are incorrect" });

      const { id, email } = user;

      const token = jwt.generate({ id, email });

      return res.json({ token });
    })
    .catch(next);
});

module.exports = router;
