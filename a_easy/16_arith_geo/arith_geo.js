function arithGeo(arr) {
  var arith = [];
  var geo = [];

  for (i = 0; i < arr.length - 1; i++) {
    arith.push(arr[i + 1] - arr[i]);
    geo.push(arr[i + 1] / arr[i]);
  }

  if (arith.filter(pickUniqueValues).length === 1) {
    return "Arithmetic";
  } else if (geo.filter(pickUniqueValues).length === 1) {
    return "Geometric";
  } else {
    return -1;
  }
}

function pickUniqueValues(value, index, self) {
  return self.indexOf(value) === index;
}
