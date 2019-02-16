const Joi = require("joi");
const rssParser = require("rss-parser");
const Api = require("../api");

const fetchFeed = ({ url }) => {
  return new Promise((resolve, reject) => {
    return rssParser.parseURL(url, (err, rss) => {
      if (err) return reject(err);

      return resolve({
        feeds: rss.feed.entries,
        link: rss.feed.link,
        description: rss.feed.description,
        title: rss.feed.title
      });
    });
  });
};

const getSchema = () =>
  Joi.object({
    feeds: Joi.array()
      .items(
        Joi.object({
          title: Joi.string().required(),
          link: Joi.string().required(),
          content: Joi.string().required(),
          contentSnippet: Joi.string().required(),
          guid: Joi.string().required()
        })
      )
      .required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    title: Joi.string().required()
  });

module.exports = Api(fetchFeed, getSchema);
