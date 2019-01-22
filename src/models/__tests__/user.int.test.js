const user = require("../user");
const testSchema = require("../../utils/test-schema");

describe("user integration test suite", () => {
  it("Should validate the contract of findUserByEmailAndPassword", () => {
    const email = "fake@jsjitsu.com";
    const password = "supersecret";
    const schema = user.findUserByEmailAndPasswordSchema();

    return user
      .findUserByEmailAndPassword({ email, password })
      .then(response => {
        return testSchema(schema, response);
      });
  });
});
