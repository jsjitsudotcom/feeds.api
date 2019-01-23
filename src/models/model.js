/**
 * @name Model
 * @param {Function} execute - The function who will execute the request to the service
 * @param {Function} getSchema - The function to get the schema of the response
 */
module.exports = (execute, getSchema) => ({
  execute,
  getSchema,
  name: execute.name,
  toString: () =>
    `Model<${execute.name}> => <{ ${Object.keys(getSchema()).join(", ")} }>)`
});
