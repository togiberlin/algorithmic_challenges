const elementMerger = arr => {
  // Base case
  if (arr.length === 1) { return arr[0]; }

  // Recursive case
  for (i = 0; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i + 1] - arr[i]);
  }

  arr.pop();

  return elementMerger(arr);
};

module.exports = elementMerger;
