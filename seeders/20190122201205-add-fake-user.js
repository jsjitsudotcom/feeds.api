const db = require("../models");

const email = "fake@jsjitsu.com";
const password = "supersecret";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return db.user.create({
      email,
      password
    });
  },

  down: (queryInterface, Sequelize) => {
    return db.user.findOne({ where: { email } }).then(user => {
      if (user) return user.destroy({ force: true });
    });
  }
};
