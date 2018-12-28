const camelCase = str => {
  const str = str.replace(/[%*-]+/g, ' ');
  const array = str.toLowerCase().split(' ');

  for (i = 1; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1, array[i].length);
  }

  return array.join('');
};

module.exports = camelCase;