const arithGeo = arr => {
  const arith = [];
  const geo = [];

  for (i = 0; i < arr.length - 1; i++) {
    arith.push(arr[i + 1] - arr[i]);
    geo.push(arr[i + 1] / arr[i]);
  }

  const pickUniqueValues = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  if (arith.filter(pickUniqueValues).length === 1) {
    return 'Arithmetic';
  } else if (geo.filter(pickUniqueValues).length === 1) {
    return 'Geometric';
  } else {
    return -1;
  }
};
