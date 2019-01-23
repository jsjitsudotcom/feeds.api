const db = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.feed.create({
      name: "echojs",
      rss_url: "http://www.echojs.com/rss",
      website_url: "http://www.echojs.com",
      is_default: true
    });

    await db.feed.create({
      name: "product hunt",
      rss_url: "https://www.producthunt.com/feed",
      website_url: "https://www.producthunt.com",
      is_default: false
    });
  },

  down: (queryInterface, Sequelize) => {
    return db.feed.destroy({
      where: {
        name: {
          [Sequelize.Op.or]: ["echojs", "product hunt"]
        }
      }
    });
  }
};
