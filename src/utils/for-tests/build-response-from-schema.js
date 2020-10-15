const isSchemaAllowNull = require("./is-schema-allow-null");

const getTypeName = key => key.type.constructor.name;

const getValue = schema => {
  if (isSchemaAllowNull(schema)) return null;

  const type = getTypeName(schema);

  if (type === "DATE") return new Date().toString();
  if (type === "STRING") return "";
  if (type === "ARRAY") return [];
  if (type === "INTEGER") return 0;

  throw new Error(`${type} is not in getValue parser`);
};

const buildResponseFromSchema = (schema, response) => {
  const keys = Object.keys(schema);
  const object = keys.reduce(
    (acc, key) => ({ ...acc, [key]: getValue(schema[key]) }),
    {}
  );
  return { ...object, ...response };
};

module.exports = buildResponseFromSchema;
