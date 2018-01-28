const RSS = require("./rss");
const R = require("ramda");

const ENDPOINTS = [
  "https://medium.com/feed/@MarquesDev",
  "https://medium.com/feed/jsjitsu",
  "https://medium.com/feed/@_ericelliott"
];

const getSevenDaysPast = () => new Date(Date.now() - 60 * 60 * 24 * 7 * 1000);

module.exports = {
  fetch(endpoint) {
    return RSS.fetchSource(endpoint);
  },
  getAll() {
    return Promise.all(ENDPOINTS.map(this.fetch))
      .then(this.flattenFeeds)
      .then(this.uniqById)
      .then(this.sortByDate)
      .then(this.filterByDate)
      .then(R.take(30));
  },
  uniqById: R.uniqBy(R.prop("guid")),
  sortByDate: R.sortWith([R.descend(R.prop("isoDate"))]),
  filterByDate(feeds) {
    const isDateMoreThan7Days = R.pipe(
      R.prop("isoDate"),
      date => new Date(date),
      R.gte(R.__, getSevenDaysPast())
    );

    return R.filter(isDateMoreThan7Days, feeds);
  },
  flattenFeeds(feeds) {
    const getFeeds = R.map(R.prop("feeds"));
    return R.pipe(getFeeds, R.flatten)(feeds);
  }
};
