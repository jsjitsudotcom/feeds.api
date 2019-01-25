const db = require("../../../models");
const Model = require("../model");

const insertUserToFeed = ({ user_id, feed_id }) => {
  return db.user_to_feed.create({ user_id, feed_id }).then(response => {
    return response;
  });
};

const getSchema = () => db.user_to_feed.tableAttributes;

module.exports = Model(insertUserToFeed, getSchema);
