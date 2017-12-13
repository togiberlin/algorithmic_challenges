function vowelCount(str) {
  str.replace(/[^A-Za-z]/g, "");
  let vowels = str.match(/[aeiou]/gi);

  if (vowels) {
    return vowels.length;
  } else {
    return 0;
  }
}
