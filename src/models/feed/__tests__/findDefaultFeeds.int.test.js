const FindDefaultFeeds = require("../FindDefaultFeeds");
const testSchema = require("../../../utils/for-tests/test-model-schema");

describe("FindDefaultFeeds integration test suite", () => {
  it("Should validate the contract of FindDefaultFeeds", () => {
    const schema = FindDefaultFeeds.getSchema();

    return FindDefaultFeeds.execute().then(response => {
      return testSchema(schema, response);
    });
  });
});
