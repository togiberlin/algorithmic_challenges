const sumMultiplier = arr => {
  const combinations = [];
  const minimumThreshold = arr.reduce((a, b) => a + b) * 2;

  // Remove duplicates
  arr = arr.filter((elem, index, self) => index === self.indexOf(elem));

  // Make repeated combinations
  for (i = 0; i < arr.length; i++) {
    for (n = 0; n < arr.length; n++) {
      combinations.push([arr[i], arr[n]]);
    }
  }

  // Multiply all combinations with each other
  combinations = combinations.map(([a, b]) => a * b);

  // Remove duplicates
  combinations = combinations.filter((elem, index, self) => index === self.indexOf(elem));

  // Determine, whether at least 2 values are above threshold
  const hasTwoValsOverThreshold = productArray => {
    let counter = 0;

    for (i = 0; i < productArray.length; i++) {
      if (productArray[i] > minimumThreshold) {
        counter++;
      }
    }

    return counter >= 2 ? true : false;
  };

  return hasTwoValsOverThreshold(combinations);
};

module.exports = sumMultiplier;
