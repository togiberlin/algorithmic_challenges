function swapCase(str) {
  let array = str.split("");

  for (i = 0; i < array.length; i++) {
    if (array[i].match(/[A-Z]/)) {
      array[i] = array[i].toLowerCase();
    } else if (array[i].match(/[a-z]/)) {
      array[i] = array[i].toUpperCase();
    }
  }

  return array.join("");
}
