const superIncreasing = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum >= arr[i]) {
      return false;
    }
    sum += arr[i];
  }

  return true;
};

module.exports = superIncreasing;
