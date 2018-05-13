const removeBrackets = str => {
  const openingBrackets = str.match(/([(])/g).length;
  const closingBrackets = str.match(/([)])/g).length;

  if (openingBrackets !== closingBrackets) {
    return Math.abs(openingBrackets - closingBrackets);
  } else {
    return 0;
  }
};

module.exports = removeBrackets;
