const testSchema = require("./test-schema");

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

module.exports = mockDbResponse;
