function removeBrackets(str) { 
  let openingBrackets = str.match(/([(])/g).length;
  let closingBrackets = str.match(/([)])/g).length;

  if (openingBrackets !== closingBrackets) {
    return Math.abs(openingBrackets - closingBrackets);
  } else {
    return 0;
  }
}
