const longestWord = str => {
  // Cleanup, convert string into array
  const array = str.replace(/[^0-9A-Za-z\s]/g, '').split(' ');

  // Length of the longest word
  const wordLength = [];

  for (i = 0; i < array.length; i++) {
    wordLength.push(array[i].length);
  }

  const longestWordIndex = wordLength.indexOf(Math.max(...wordLength));

  return array[longestWordIndex];
};

module.exports = longestWord;
