const mockFailResponse = message => {
  return () => Promise.reject(message);
};

module.exports = mockFailResponse;
