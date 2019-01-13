const supertest = require("supertest");
const app = require("../../../app");
const user = require("../../../models/user");

const testSchema = (schemaKeys, response) => {
  const responseKeys = Object.keys(response);
  responseKeys.forEach(key => {
    if (!schemaKeys.includes(key))
      throw new Error(`
    The schema does not contains ${key} attribute
    `);
  });
};

const mockDbResponse = (schema, response) => {
  return jest.fn(() => {
    if (response === null) return Promise.resolve(null);
    if (Array.isArray(response)) {
      response.forEach(response => testSchema(schema, response));
      return Promise.resolve(response);
    } else {
      testSchema(schema, response);
      return Promise.resolve(response);
    }
  });
};

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
