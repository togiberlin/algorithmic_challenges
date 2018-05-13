const abCheck = str => {
  const array = str.split('');
  const bools = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] === 'a') {
      if (array[i + 4] === 'b') {
        bools.push(true);
      } else {
        bools.push(false);
      }
    } else if (array[i] === 'b') {
      if (array[i + 4] === 'a') {
        bools.push(true);
      } else {
        bools.push(false);
      }
    }
  }

  return bools.includes(true);
};

module.exports = abCheck;
