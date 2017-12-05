function simpleAdding(num) {
  var array = [];

  while (num !== 0) {
    array.push(num);
    num--;
  }

  return array.reduce(function(acc, val) {
    return acc + val;
  });
}
