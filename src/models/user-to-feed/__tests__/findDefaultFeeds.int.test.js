const insertUserToFeed = require("../insertUserToFeed");
const testSchema = require("../../../utils/for-tests/test-model-schema");

describe("insertUserToFeed integration test suite", () => {
  it("Should have a schema", () => {
    insertUserToFeed.getSchema();
  });
});
