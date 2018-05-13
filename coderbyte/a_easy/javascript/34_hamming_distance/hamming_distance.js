const hammingDistance = strArr => {
  strArr = strArr.map(elem => elem.split(''));
  let counter = 0;

  for (i = 0; i < 1; i++) {
    for (n = 0; n < strArr[i].length; n++) {
      if (strArr[i][n] !== strArr[i + 1][n]) {
        counter++;
      }
    }
  }

  return counter;
};

module.exports = hammingDistance;
