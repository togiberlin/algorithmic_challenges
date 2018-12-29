const sumMultiplier = (arr) => {
  const combinations = [];
  const minimumThreshold = arr.reduce((a, b) => a + b) * 2;

  // Remove duplicates
  const input = arr.filter((elem, index, self) => index === self.indexOf(elem));

  // Make repeated combinations
  for (let i = 0; i < input.length; i++) {
    for (n = 0; n < input.length; n++) {
      combinations.push([input[i], input[n]]);
    }
  }

  // Multiply all combinations with each other
  combinations = combinations.map(([a, b]) => a * b);

  // Remove duplicates
  combinations = combinations.filter((elem, index, self) => {
    index === self.indexOf(elem);
  });

  // Determine, whether at least 2 values are above threshold
  const hasTwoValsOverThreshold = (productArray) => {
    let counter = 0;

    for (let i = 0; i < productArray.length; i++) {
      if (productArray[i] > minimumThreshold) {
        counter++;
      }
    }

    return counter >= 2 ? true : false;
  };

  return hasTwoValsOverThreshold(combinations);
};

module.exports = sumMultiplier;
