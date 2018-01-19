function countBs(string) {
  return string.match(/[B]/g).length;
}

countBs("B This B bb string contains B exactly bbb 7 uppercase B's. BBB")

function countChar(string, char) {
  let count = 0;

  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) { count++; }
  }

  return count;
}

countChar("Hello world!", "o");
