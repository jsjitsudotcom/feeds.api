const Promise = require("bluebird");
const request = require('request');

const RSS = {
  fetchFeeds: /* istanbul ignore next */ url => {
    return new Promise((resolve, reject) => {
      return request(url, (err, response) => {
        if (err) return reject(err);
        return resolve(response.body);
      })
    });
  },
  fetchSource(url) {
    return RSS.fetchFeeds(url);
  }
};

module.exports = RSS;
