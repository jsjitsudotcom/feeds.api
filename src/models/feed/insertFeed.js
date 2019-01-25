const db = require("../../../models");
const Model = require("../model");

const insertFeed = ({ name, rss_url, website_url }) => {
  return db.feed
    .create({
      name,
      rss_url,
      website_url
    })
    .then(response => {
      return response.get({ plain: true });
    });
};

const getSchema = () => db.feed.tableAttributes;

/**
 * @typedef insertFeed
 * @param {Object} options
 * @param {string} options.name
 * @param {string} options.rss_url
 * @param {string} options.website_url
 *
 * @type { insertFeed }
 */
module.exports = Model(insertFeed, getSchema);
