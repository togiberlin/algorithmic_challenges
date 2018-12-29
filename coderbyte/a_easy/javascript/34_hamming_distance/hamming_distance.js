const hammingDistance = (strArr) => {
  const input = strArr.map((elem) => elem.split(''));
  let counter = 0;

  for (let i = 0; i < 1; i++) {
    for (let n = 0; n < input[i].length; n++) {
      if (input[i][n] !== input[i + 1][n]) {
        counter++;
      }
    }
  }

  return counter;
};

module.exports = hammingDistance;
