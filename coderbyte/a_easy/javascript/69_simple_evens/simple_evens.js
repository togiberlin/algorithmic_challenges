const simpleEvens = (num) => {
  const array = num.toString().split('');

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] % 2 === 0;
  }

  if (array.includes(false)) {
    return false;
  } else {
    return true;
  }
};

module.exports = simpleEvens;
