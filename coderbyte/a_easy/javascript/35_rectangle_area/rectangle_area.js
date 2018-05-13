const rectangleArea = strArr => {
  strArr = strArr.map(elem => elem.match(/[-?\d]+/g));

  const widthArr = [];
  const heightArr = [];

  for (i = 0; i < strArr.length; i++) {
    widthArr.push(strArr[i][0]);
    heightArr.push(strArr[i][1]);
  }

  const width = Math.max(...widthArr) - Math.min(...widthArr);
  const height = Math.max(...heightArr) - Math.min(...heightArr);

  return width * height;
};

module.exports = rectangleArea;
