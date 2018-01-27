const RSS = require("./rss");
const R = require("ramda");

const ENDPOINT = "http://www.echojs.com/rss";

module.exports = () => RSS.fetchSource(ENDPOINT).then(R.prop("feeds"));
