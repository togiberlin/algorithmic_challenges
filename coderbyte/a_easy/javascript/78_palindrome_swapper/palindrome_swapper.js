const palindromeSwapper = str => {
  const array = str.split('');

  for (i = 0; i < array.length - 1; i++) {
    // .slice() creates a copy and prevents changes to original array
    const swapArray = array.slice();

    const swapVar = array[i];
    swapArray[i] = swapArray[i + 1];
    swapArray[i + 1] = swapVar;

    if (swapArray.join('') === swapArray.slice().reverse().join('')) {
      return swapArray.join('');
    }
  }

  return -1;
};

module.exports = palindromeSwapper;
