const testSchema = (schema, response) => {
  const responseKeys = Object.keys(response);
  responseKeys.forEach(key => {
    if (!schema[key])
      throw new Error(`The schema does not contains ${key} attribute`);

    return schema[key].type.validate(response[key]);
  });
};

module.exports = testSchema;
