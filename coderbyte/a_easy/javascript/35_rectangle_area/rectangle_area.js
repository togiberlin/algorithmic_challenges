const rectangleArea = (strArr) => {
  const input = strArr.map((elem) => elem.match(/[-?\d]+/g));
  const widthArr = [];
  const heightArr = [];

  for (let i = 0; i < input.length; i++) {
    widthArr.push(input[i][0]);
    heightArr.push(input[i][1]);
  }

  const width = Math.max(...widthArr) - Math.min(...widthArr);
  const height = Math.max(...heightArr) - Math.min(...heightArr);

  return width * height;
};

module.exports = rectangleArea;
