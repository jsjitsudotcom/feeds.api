/**
 * @name Api
 * @param {Function} execute - The function who will execute the request to the service
 * @param {Function} getSchema - The function to get the schema of the response
 */
module.exports = (execute, getSchema) => ({
  execute,
  getSchema
});
