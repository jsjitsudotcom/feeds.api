const db = require("../../../models");
const Model = require("../model");

const findUserByEmailAndPassword = ({ email, password }) => {
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
};

const findUserByEmailAndPasswordSchema = () => db.user.tableAttributes;

module.exports = Model(
  findUserByEmailAndPassword,
  findUserByEmailAndPasswordSchema
);
