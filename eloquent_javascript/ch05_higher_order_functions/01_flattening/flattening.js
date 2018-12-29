const flatten = (array) => {
  return array.reduce((a, b) => a.concat(b));
};

const arrays = [[1, 2, 3], [4, 5], [6]];
flatten(arrays); // [1, 2, 3, 4, 5, 6]
