const db = require("../../../models");
const Model = require("../Model");

class FindUserByEmailAndPassword extends Model {
  execute({ email, password }) {
    return db.user
      .findOne({
        where: {
          email,
          password
        }
      })
      .then(response => {
        if (response) return response.get({ plain: true });
        return response;
      });
  }

  getSchema() {
    return db.user.tableAttributes;
  }
}

module.exports = new FindUserByEmailAndPassword();
