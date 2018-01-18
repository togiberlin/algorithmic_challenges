function stringMerge(str) { 
  let array = str.split("*");
  let result = [];

  for (i = 0; i < array.length - 1; i++) {
    for (n = 0; n < array[i].length; n++) {
      result.push(array[i][n] + array[i + 1][n]);
    }
  }

  return result.join("");
}
