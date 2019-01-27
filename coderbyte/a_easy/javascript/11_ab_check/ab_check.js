const abCheck = (str) => {
  const array = str.split('');

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'a' && array[i + 4] === 'b' ||
      array[i] === 'b' && array[i + 4] === 'a') {
      return true;
    }
  }

  return false;
};

module.exports = abCheck;
