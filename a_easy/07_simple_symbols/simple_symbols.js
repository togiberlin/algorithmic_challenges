function simpleSymbols(str) {
  var bools = [];
  var array = str.split("");

  for (i = 0; i < str.length; i++) {
    if (/[A-Za-z]/.test(array[i]) && i !== 0 && i !== array.length) {
      if (array[i - 1] === "+" && array[i + 1] === "+") {
        bools.push(true);
      } else {
        bools.push(false);
      }
    }
  }

  return !bools.includes(false)
}
