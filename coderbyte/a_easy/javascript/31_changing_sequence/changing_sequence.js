const changingSequence = (arr) => {
  const increasingSequence = arr[0] < arr[1] ? true : false;

  if (increasingSequence) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return i;
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        return i;
      }
    }
  }

  return -1;
};

module.exports = changingSequence;
