const FindFeedsOfUser = require("../FindFeedsOfUser");
const testSchema = require("../../../utils/for-tests/test-model-schema");

describe("FindFeedsOfUser integration test suite", () => {
  it("Should validate the contract of FindFeedsOfUser", () => {
    const schema = FindFeedsOfUser.getSchema();
    const user_id = 1;
    return FindFeedsOfUser.execute({ user_id }).then(response => {
      return testSchema(schema, response);
    });
  });
});
