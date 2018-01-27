const RSS = require("./rss");
const R = require("ramda");

const ENDPOINTS = [
  "https://medium.com/feed/@MarquesDev",
  "https://medium.com/feed/jsjitsu",
  "https://medium.com/feed/@_ericelliott"
];

module.exports = {
  fetch(endpoint) {
    return RSS.fetchSource(endpoint);
  },
  getAll() {
    return Promise.all(ENDPOINTS.map(this.fetch))
      .then(this.flattenFeeds)
      .then(this.uniqById)
      .then(this.sortByDate)
      .then(R.take(30));
  },
  uniqById: R.uniqBy(R.prop("guid")),
  sortByDate: R.sortWith([R.descend(R.prop("isoDate"))]),
  flattenFeeds(feeds) {
    return R.pipe(R.map(R.prop("feeds")), R.flatten)(feeds);
  }
};
