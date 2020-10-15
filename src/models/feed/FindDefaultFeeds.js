const db = require("../../../models");
const Model = require("../Model");

class FindDefaultFeeds extends Model {
  execute() {
    return db.feed
      .findAll({
        where: {
          is_default: true
        },
        raw: true
      })
      .then(response => {
        return response;
      });
  }

  getSchema() {
    return db.feed.tableAttributes;
  }
}

module.exports = new FindDefaultFeeds();
