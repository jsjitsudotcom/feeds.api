const allowNull = schema =>
  !schema.hasOwnProperty("allowNull") || schema.allowNull === true;

const testSchema = (schema, response) => {
  const responseKeys = Object.keys(response);

  responseKeys.forEach(key => {
    if (!schema[key])
      throw new Error(`The schema does not contains ${key} attribute`);

    if (response[key] === null && allowNull(schema[key])) return true;

    return schema[key].type.validate(response[key]);
  });
};

module.exports = testSchema;
