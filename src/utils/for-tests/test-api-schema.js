const Joi = require("joi");

const testSchema = (schema, response) => {
  return Joi.assert(response, schema);
};

const mapTestSchema = (schema, response) => {
  if (!Array.isArray(response)) return testSchema(schema, response);
  if (response.length === 0) throw new Error("The response is an empty array");
  return testSchema(Joi.array.items(schema), response);
};

module.exports = mapTestSchema;
