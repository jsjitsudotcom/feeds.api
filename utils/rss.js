const rssParser = require("rss-parser");
const Promise = require("bluebird");

const RSS = {
  fetchFeeds: /* istanbul ignore next */ url => {
    return new Promise((resolve, reject) => {
      return rssParser.parseURL(url, (err, parsed) => {
        if (err) return reject(err);
        return resolve(parsed);
      });
    });
  },
  fetchSource(url) {
    return RSS.fetchFeeds(url).then(rss => {
      return {
        feeds: rss.feed.entries,
        link: rss.feed.link,
        description: rss.feed.description,
        title: rss.feed.title
      };
    });
  }
};

module.exports = RSS;
