const db = require("../../../models");
const Model = require("../Model");

class InsertUserToFeed extends Model {
  execute({ user_id, feed_id }) {
    return db.user_to_feed.create({ user_id, feed_id }).then(response => {
      return response;
    });
  }

  getSchema() {
    return db.user_to_feed.tableAttributes;
  }
}

module.exports = new InsertUserToFeed();
