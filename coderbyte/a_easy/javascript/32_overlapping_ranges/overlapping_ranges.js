const overlappingRanges = (arr) => {
  const setA = [arr[0], arr[1]];
  const setB = [arr[2], arr[3]];
  const overlapRange = arr.reverse().shift();

  // Overlap conditions
  const overlapAB = setA[1] >= setB[0] && (setA[1] - setB[0]) >= overlapRange;
  const overlapBA = setA[0] <= setB[1] && (setB[1] - setA[0]) >= overlapRange;

  // If there is overlap, but smaller than the specified range
  const setATooSmall = setA[1] - setA[0] <= overlapRange;
  const setBTooSmall = setB[1] - setB[0] <= overlapRange;

  if (!setATooSmall && !setBTooSmall && (overlapAB || overlapBA)) {
    return true;
  } else {
    return false;
  }
};

module.exports = overlappingRanges;
