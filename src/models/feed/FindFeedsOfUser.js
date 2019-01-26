const db = require("../../../models");
const Model = require("../Model");

class FindFeedsOfUser extends Model {
  /**
   *
   * @param {*} param0
   */
  execute({ user_id, limit = 10, offset = 0 }) {
    return db.feed
      .findAll({
        limit,
        offset,
        include: [
          {
            row: true,
            model: db.user,
            as: "users",
            where: { id: user_id },
            attributes: [],
            through: {
              attributes: []
            }
          }
        ]
      })
      .then(response => {
        if (!response) return response;
        return response;
      });
  }

  /**
   * @returns {string}
   */
  getSchema() {
    return db.feed.tableAttributes;
  }
}

module.exports = new FindFeedsOfUser();
