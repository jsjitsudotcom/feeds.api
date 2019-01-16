const db = require("../../models");

const findUserByEmailAndPassword = ({ email, password }) => {
  return db.user.findOne({
    where: {
      email,
      password
    }
  });
};

findUserByEmailAndPasswordSchema = () => db.user.tableAttributes;

module.exports = {
  findUserByEmailAndPassword,
  findUserByEmailAndPasswordSchema
};
