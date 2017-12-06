function abCheck(str) {
  var array = str.split("");
  var bools = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] === "a") {
      if (array[i + 4] === "b") {
        bools.push(true);
      } else {
        bools.push(false);
      }
    } else if (array[i] === "b") {
      if (array[i + 4] === "a") {
        bools.push(true);
      } else {
        bools.push(false);
      }
    }
  }

  return bools.includes(true);
}
