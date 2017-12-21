function swapCase(string, length) {
  let array = string.split("");

  for (i = 0; i < length; i++) {
    if (array[i].match(/[a-z]/)) {
      array[i] = array[i].toUpperCase();
    } else if (array[i].match(/[A-Z]/)) {
      array[i] = array[i].toLowerCase();
    }
  }

  return array.join("");
}
