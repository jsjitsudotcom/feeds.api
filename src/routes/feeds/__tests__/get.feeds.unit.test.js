const supertest = require("supertest");
const app = require("../../../app");
const findDefaultFeeds = require("../../../models/feed/findDefaultFeeds");
const mockDbResponse = require("../../../utils/for-tests/mock-db-response");
const buildResponseFromSchema = require("../../../utils/for-tests/build-response-from-schema");
const login = require("../../../utils/for-tests/login");

describe("/GET feeds test suite", () => {
  describe("/feeds", () => {
    it("Should return the default feeds if the user is not connected", () => {
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
  });

  describe("/feeds/me", () => {
    it("Should return an error if the user is not connected", () => {
      return supertest(app)
        .get("/feeds/me")
        .expect(500)
        .then(({ body }) => {
          expect(body.message).toEqual("No authorization token was found");
        });
    });

    it("Should return the feeds of an user", () => {
      const schema = findDefaultFeeds.getSchema();
      const response = buildResponseFromSchema(schema, {
        id: 1,
        name: "echojs",
        is_default: false
      });

      findDefaultFeeds.execute = mockDbResponse(schema, [response]);

      const requestWithLogin = login(supertest(app).get("/feeds/me"));

      return requestWithLogin.then(({ body }) => {
        expect(body[0]).toEqual(response);
      });
    });
  });
});
