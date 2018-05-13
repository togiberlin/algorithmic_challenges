const letterCapitalize = str => {
  const array = str.split(' ');

  return array.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length);
  }).join(' ');
};

module.exports = letterCapitalize;
