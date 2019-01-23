var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");

const secret = "FFGHJ876545678KJHUIOIU";

/**
 * Permet de générer un jwt
 * @param {*} obj
 */
const generate = obj => jwt.sign(obj, secret);

/**
 * Express middleware pour checker si un token est présent dans la requête
 * @param {*} unless - Paramètres de expressJwt.unless(unless)
 */
const use = unless => {
  const ej = expressJwt({
    secret,
    getToken: function fromHeaderOrQuerystring(req) {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    }
  });
  if (unless) return ej.unless(unless);
  return ej;
};

module.exports = { generate, use };
