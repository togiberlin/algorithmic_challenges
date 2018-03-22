function longestWord(str) {
  // Cleanup, convert string into array
  let array = str.replace(/[^0-9A-Za-z\s]/g, "").split(" ");

  // Length of the longest word
  let wordLength = [];

  for (i = 0; i < array.length; i++) {
    wordLength.push(array[i].length);
  }

  // Find the index of the longest word
  let longestWordIndex = wordLength.indexOf(Math.max.apply(null, wordLength));

  // Output
  return array[longestWordIndex];
}

module.exports = longestWord;
