const RSS = require("./utils/rss");

const handleSuccess = body => ({
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  body: body
});

const handleError = ({ message, stack }, statusCode = 400) => ({
  statusCode,
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  body: JSON.stringify({ message, stack })
});

module.exports.feeds = (event, context, callback) => {
  const { url } = event.queryStringParameters;

  return RSS.fetchSource(url)
    .then(response => callback(null, handleSuccess(response)))
    .catch(error => callback(null, handleError(error)));
};
