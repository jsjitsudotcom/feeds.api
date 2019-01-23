const jwt = require("../jwt");

const login = (supertestApp, credentials = {}) => {
  const token = jwt.generate({ id: 1, email: "fake", ...credentials });
  return supertestApp.set("Authorization", `Bearer ${token}`);
};

module.exports = login;
