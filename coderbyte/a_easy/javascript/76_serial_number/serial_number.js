const serialNumber = str => {
  const validityRegex = /^([0-9]{3})\.([0-9]{3})\.([0-9]{3})$/g;
  const match = validityRegex.exec(str);

  if (!match) { return false; } // 1st condition

  const firstSet = match[1].split('').map(elem => parseInt(elem));
  const secondSet = match[2].split('').map(elem => parseInt(elem));
  const thirdSet = match[3].split('').map(elem => parseInt(elem));

  if (firstSet.reduce((a, b) => a + b) % 2 !== 0) { return false; } // 2nd condition
  if (secondSet.reduce((a, b) => a + b) % 2 === 0) { return false; } // 3rd condition

  const isLastDigitLargest = arr => {
    return arr[2] > arr[0] && arr[2] > arr[1];
  };

  // 4th condition
  if (!isLastDigitLargest(firstSet) && !isLastDigitLargest(secondSet) && !isLastDigitLargest(thirdSet)) {
    return false;
  }

  return true;
};

module.exports = serialNumber;
