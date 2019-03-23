const Sentry = require("@sentry/node");
const VERSION = process.env.npm_package_version;

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  release: VERSION,
  environment: process.env.NODE_ENV
});

module.exports = Sentry;
