const simpleSymbols = (str) => {
  const bools = [];
  const array = str.split('');

  if (array.length <= 2) return false;

  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z]/.test(array[i]) && i !== 0 && i !== array.length) {
      if (array[i - 1] === '+' && array[i + 1] === '+') {
        bools.push(true);
      } else {
        bools.push(false);
      }
    }
  }

  return !bools.includes(false);
};

module.exports = simpleSymbols;
