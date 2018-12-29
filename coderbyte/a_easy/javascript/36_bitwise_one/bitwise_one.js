const bitwiseOne = (strArr) => {
  const input = strArr.map((elem) => elem.split(''));

  for (let i = 0; i < input[0].length; i++) {
    input[0][i] = parseInt(input[0][i]) || parseInt(input[1][i]);
  }

  return input[0].join('');
};

module.exports = bitwiseOne;
