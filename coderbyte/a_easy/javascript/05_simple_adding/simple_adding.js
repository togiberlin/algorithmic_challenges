const simpleAdding = (num) => {
  const array = [];

  while (num !== 0) {
    array.push(num);
    num--;
  }

  return array.reduce((acc, val) => {
    return acc + val;
  });
};

module.exports = simpleAdding;
