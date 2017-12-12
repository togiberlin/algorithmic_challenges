function ASCIIConversion(str) {
  let array = str.split("");

  for (i = 0; i < array.length; i++) {
    if (!/[ ]/.test(array[i])) {
      array[i] = array[i].charCodeAt(0);
    }
  }
  return array.join("");
}
