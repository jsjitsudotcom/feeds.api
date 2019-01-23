const supertest = require("supertest");
const app = require("../../../app");
const findDefaultFeeds = require("../../../models/feed/findDefaultFeeds");
const mockDbResponse = require("../../../utils/for-tests/mock-db-response");
const buildResponseFromSchema = require("../../../utils/for-tests/build-response-from-schema");

describe("/GET feeds test suite", () => {
  it.only("Should return the default feeds if the user is not connected", () => {
    const schema = findDefaultFeeds.getSchema();
    const response = buildResponseFromSchema(schema, {
      id: 1,
      name: "echojs",
      is_default: true
    });

    findDefaultFeeds.execute = mockDbResponse(schema, [response]);

    return supertest(app)
      .get("/feeds")
      .then(({ body }) => {
        expect(body[0]).toEqual(response);
      });
  });

  it("Should return an error if the password is not provided", () => {
    const email = "supersecret";

    return supertest(app)
      .post("/feeds")
      .send({ email })
      .expect(400);
  });

  it("Should return the user information if the credentials are correct", () => {
    const id = "23456";
    const email = "jsjitsu@gmail.com";
    const password = "supersecret";
    const schema = findUserByEmailAndPassword.getSchema();

    findUserByEmailAndPassword.execute = mockDbResponse(schema, {
      id,
      email,
      password
    });

    return supertest(app)
      .post("/feeds")
      .send({ email, password })
      .then(({ body }) => {
        expect(body).toEqual({ id, email });
      });
  });

  it("Should return an error if the credentials are incorrect", () => {
    const email = "jsjitsu@gmail.com";
    const password = "supersecret";
    const schema = findUserByEmailAndPassword.getSchema();

    findUserByEmailAndPassword.execute = mockDbResponse(schema, null);

    return supertest(app)
      .post("/feeds")
      .send({ email, password })
      .expect(400)
      .then(({ body }) => {
        expect(body).toEqual({ message: "The credentials are incorrect" });
      });
  });
});
