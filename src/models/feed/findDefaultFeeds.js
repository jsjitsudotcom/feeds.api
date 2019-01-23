const db = require("../../../models");
const Model = require("../model");

const findDefaultFeeds = () => {
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
};

const getSchema = () => db.feed.tableAttributes;

module.exports = Model(findDefaultFeeds, getSchema);
