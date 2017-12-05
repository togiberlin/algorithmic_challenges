function longestWord(str) {
  // Cleanup, convert string into array
  var array = str.replace(/[^0-9A-Za-z\s]/g, "").split(" ");

  // Length of the longest word
  var wordLength = [];

  for (i = 0; i < array.length; i++) {
    wordLength.push(array[i].length);
  }

  // Find the index of the longest word
  var longestWordIndex = wordLength.indexOf(Math.max.apply(null, wordLength))

  // Output
  return array[longestWordIndex];
}
