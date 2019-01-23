const testSchema = require("./test-schema");

const mockDbResponse = (schema, response) => {
  if (Array.isArray(response))
    response.forEach(response => testSchema(schema, response));
  else if (response !== null) testSchema(schema, response);

  return jest.fn(() => {
    if (response === null) return Promise.resolve(null);
    if (Array.isArray(response)) return Promise.resolve(response);
    return Promise.resolve(response);
  });
};

module.exports = mockDbResponse;
