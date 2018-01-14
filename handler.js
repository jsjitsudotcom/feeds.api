const RSS = require("./utils/rss");

const headers = {
  "Access-Control-Allow-Origin": process.env.ALLOW_ORIGIN
};

const handleSuccess = body => ({
  statusCode: 200,
  headers,
  body: JSON.stringify(body)
});

const handleError = ({ message, stack }, statusCode = 400) => ({
  statusCode,
  headers,
  body: JSON.stringify({ message, stack })
});

module.exports.feeds = (event, context, callback) => {
  const { url } = event.queryStringParameters;

  return RSS.fetchSource(url)
    .then(response => callback(null, handleSuccess(response)))
    .catch(error => callback(null, handleError(error)));
};
