const supertest = require("supertest");
const app = require("../../../app");
const user = require("../../../models/user");
const mockDbResponse = require("../../../utils/mock-db-response");

describe("/users test suite", () => {
  it("Should return an error if the email is not provided", () => {
    const password = "supersecret";

    return supertest(app)
      .post("/users")
      .send({ password })
      .expect(400);
  });

  it("Should return an error if the password is not provided", () => {
    const email = "supersecret";

    return supertest(app)
      .post("/users")
      .send({ email })
      .expect(400);
  });

  it("Should return the user information if the credentials are correct", () => {
    const id = "23456";
    const email = "jsjitsu@gmail.com";
    const password = "supersecret";
    const schema = user.findUserByEmailAndPasswordSchema();

    user.findUserByEmailAndPassword = mockDbResponse(schema, {
      id,
      email,
      password
    });

    return supertest(app)
      .post("/users")
      .send({ email, password })
      .then(({ body }) => {
        expect(body).toEqual({ id, email });
      });
  });

  it("Should return an error if the credentials are incorrect", () => {
    const email = "jsjitsu@gmail.com";
    const password = "supersecret";
    const schema = user.findUserByEmailAndPasswordSchema();

    user.findUserByEmailAndPassword = mockDbResponse(schema, null);

    return supertest(app)
      .post("/users")
      .send({ email, password })
      .expect(400)
      .then(({ body }) => {
        expect(body).toEqual({ message: "The credentials are incorrect" });
      });
  });
});
