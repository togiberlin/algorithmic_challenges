function overlappingRanges(arr) {
  let setA = [arr[0], arr[1]];
  let setB = [arr[2], arr[3]];
  let overlapRange = arr.reverse().shift();

  // Overlap conditions
  let overlapAB = setA[1] >= setB[0] && (setA[1] - setB[0]) >= overlapRange;
  let overlapBA = setA[0] <= setB[1] && (setB[1] - setA[0]) >= overlapRange;

  // If there is overlap, but smaller than the specified range
  let setATooSmall = setA[1] - setA[0] <= overlapRange;
  let setBTooSmall = setB[1] - setB[0] <= overlapRange;

  if (!setATooSmall && !setBTooSmall && (overlapAB || overlapBA)) {
    return true;
  } else {
    return false;
  }
}
