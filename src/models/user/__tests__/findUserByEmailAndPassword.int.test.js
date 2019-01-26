const FindUserByEmailAndPassword = require("../FindUserByEmailAndPassword");
const testSchema = require("../../../utils/for-tests/test-model-schema");

describe("FindUserByEmailAndPassword integration test suite", () => {
  it("Should validate the contract of FindUserByEmailAndPassword", () => {
    const email = "fake@jsjitsu.com";
    const password = "supersecret";
    const schema = FindUserByEmailAndPassword.getSchema();

    return FindUserByEmailAndPassword.execute({ email, password }).then(
      response => testSchema(schema, response)
    );
  });
});
