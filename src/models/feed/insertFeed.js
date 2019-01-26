const db = require("../../../models");
const Model = require("../Model");

class InsertFeed extends Model {
  /**
   * @name execute
   * @param {Object} options
   * @param {string} options.name
   * @param {string} options.rss_url
   * @param {string} options.website_url
   *
   */
  execute({ name, rss_url, website_url }) {
    return db.feed
      .create({
        name,
        rss_url,
        website_url
      })
      .then(response => {
        return response.get({ plain: true });
      });
  }

  getSchema() {
    return db.feed.tableAttributes;
  }
}

module.exports = new InsertFeed();
