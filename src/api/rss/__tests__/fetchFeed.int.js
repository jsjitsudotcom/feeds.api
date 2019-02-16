const fetchFeed = require("../fetchFeed");
const testSchema = require("../../../utils/for-tests/test-api-schema");

describe("fetchFeed integration test suite", () => {
  it("Should validate the contract of fetchFeed", () => {
    const schema = fetchFeed.getSchema();
    const url = "http://www.echojs.com/rss";

    return fetchFeed.execute({ url }).then(response => {
      return testSchema(schema, response);
    });
  });
});
