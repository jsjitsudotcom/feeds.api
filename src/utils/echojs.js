const RSS = require("./rss");

const ENDPOINT = "http://www.echojs.com/rss";

module.exports = () => RSS.fetchSource(ENDPOINT);
