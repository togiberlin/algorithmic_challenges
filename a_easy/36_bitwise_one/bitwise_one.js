function bitwiseOne(strArr) {
  strArr = strArr.map(elem => elem.split(""));

  for (i = 0; i < strArr[0].length; i++) {
    strArr[0][i] = parseInt(strArr[0][i]) || parseInt(strArr[1][i]);
  }

  return strArr[0].join("");
}
