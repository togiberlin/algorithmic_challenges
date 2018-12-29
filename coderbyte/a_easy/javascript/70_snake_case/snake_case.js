const snakeCase = (str) => {
  return str.toLowerCase().replace(/([-*\s%])+/g, '_');
};

module.exports = snakeCase;
