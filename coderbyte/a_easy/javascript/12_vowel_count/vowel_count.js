const vowelCount = (str) => {
  const input = str.replace(/[^A-Za-z]/g, '');
  const vowels = input.match(/[aeiou]/gi);

  if (vowels) {
    return vowels.length;
  } else {
    return 0;
  }
};

module.exports = vowelCount;
