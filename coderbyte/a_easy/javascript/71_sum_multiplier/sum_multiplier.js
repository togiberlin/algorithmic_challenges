const sumMultiplier = (arr) => {
  const minimumThreshold = arr.reduce((a, b) => a + b) * 2;
  const sortedInput = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sortedInput.length; i++) {
    const product = sortedInput[i] * sortedInput[i + 1];

    if (product > minimumThreshold) {
      return true;
    }
  }

  return false;
};

module.exports = sumMultiplier;
