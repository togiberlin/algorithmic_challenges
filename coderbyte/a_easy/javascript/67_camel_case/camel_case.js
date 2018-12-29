const camelCase = (str) => {
  const input = str.replace(/[%*-]+/g, ' ');
  const array = input.toLowerCase().split(' ');

  for (let i = 1; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1, array[i].length);
  }

  return array.join('');
};

module.exports = camelCase;
