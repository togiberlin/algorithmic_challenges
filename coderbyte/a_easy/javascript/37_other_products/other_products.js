const otherProducts = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr.reduce((a, b) => a * b) / arr[i]);
  }

  return result.join('-');
};

module.exports = otherProducts;
