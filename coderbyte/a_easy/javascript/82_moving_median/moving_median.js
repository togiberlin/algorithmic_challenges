const movingMedian = (arr) => {
  const windowSize = arr.shift();
  const array = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i]);

    const currentWindow = array.slice(0, arr.length);

    if (array.length >= windowSize) {
      array.shift();
    }

    result.push(currentWindow);
  }

  return result.map((elem) => {
    if (elem.length !== windowSize) {
      return elem.reduce((a, b) => a + b, 0) / elem.length;
    } else {
      elem.sort((a, b) => a - b);

      const lowMiddle = Math.floor((elem.length - 1) / 2);
      const highMiddle = Math.ceil((elem.length - 1) / 2);
      const median = (elem[lowMiddle] + elem[highMiddle]) / 2;

      return median;
    }
  }).join(',');
};

module.exports = movingMedian;
