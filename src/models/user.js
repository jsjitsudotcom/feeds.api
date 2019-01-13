const db = require("../../models");

const findUserByEmailAndPassword = ({ email, password }) => {
  return db.user.findOne({
    where: {
      email,
      password
    }
  });
};

findUserByEmailAndPasswordSchema = () => {
  const userAttributes = Object.keys(db.user.tableAttributes);
  return [].concat(userAttributes);
};

module.exports = {
  findUserByEmailAndPassword,
  findUserByEmailAndPasswordSchema
};
