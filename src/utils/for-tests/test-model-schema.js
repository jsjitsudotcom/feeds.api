const isSchemaAllowNull = require("./is-schema-allow-null");

const testSchema = (schema, response) => {
  const responseKeys = Object.keys(response.rawAttributes || response);

  responseKeys.forEach(key => {
    if (!schema[key])
      throw new Error(`The schema does not contains ${key} attribute`);

    if (response[key] === null && isSchemaAllowNull(schema[key])) return true;

    return schema[key].type.validate(response[key]);
  });
};

const mapTestSchema = (schema, response) => {
  if (!Array.isArray(response)) return testSchema(schema, response);
  if (response.length === 0) throw new Error("The response is an empty array");
  return response.forEach(res => testSchema(schema, res));
};

module.exports = mapTestSchema;
