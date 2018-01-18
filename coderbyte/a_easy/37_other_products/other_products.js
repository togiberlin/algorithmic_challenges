function otherProducts(arr) { 
  let result = [];

  for (i = 0; i < arr.length; i++) {
    result.push(arr.reduce((a, b) => a * b) / arr[i]);
  }

  return result.join("-");
}
