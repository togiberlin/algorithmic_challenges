function rectangleArea(strArr) {
  strArr = strArr.map(elem => elem.match(/[-?\d]+/g));

  let widthArr = [];
  let heightArr = [];

  for (i = 0; i < strArr.length; i++) {
    widthArr.push(strArr[i][0]);
    heightArr.push(strArr[i][1]);
  }

  let width = Math.max(...widthArr) - Math.min(...widthArr);
  let height = Math.max(...heightArr) - Math.min(...heightArr);

  return width * height;
}
