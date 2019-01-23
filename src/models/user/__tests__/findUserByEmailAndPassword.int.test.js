const findUserByEmailAndPassword = require("../findUserByEmailAndPassword");
const testSchema = require("../../../utils/for-tests/test-schema");

describe("findUserByEmailAndPassword integration test suite", () => {
  it("Should validate the contract of findUserByEmailAndPassword", () => {
    const email = "fake@jsjitsu.com";
    const password = "supersecret";
    const schema = findUserByEmailAndPassword.getSchema();

    return findUserByEmailAndPassword
      .execute({ email, password })
      .then(response => {
        return testSchema(schema, response);
      });
  });
});
