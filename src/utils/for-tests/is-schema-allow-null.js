const isSchemaAllowNull = schema =>
  !schema.hasOwnProperty("allowNull") || schema.allowNull === true;

module.exports = isSchemaAllowNull;
