const findDefaultFeeds = require("../findDefaultFeeds");
const testSchema = require("../../../utils/for-tests/test-model-schema");

describe("findDefaultFeeds integration test suite", () => {
  it("Should validate the contract of findDefaultFeeds", () => {
    const schema = findDefaultFeeds.getSchema();

    return findDefaultFeeds.execute().then(response => {
      return testSchema(schema, response);
    });
  });
});
