const arrayToList = (array) => {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list,
    };
  }

  return list;
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

const listToArray = (list) => {
  const array = [];

  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
};

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

/* --------- Helper functions --------- */

const prepend = (element, list) => {
  return {
    value: element, list: list,
  };
};

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

const nth = (list, number) => {
  if (!list) {
    return undefined;
  } else if (number === 0) {
    return list.value;
  } else {
    return nth(list.rest, number - 1);
  }
};

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
