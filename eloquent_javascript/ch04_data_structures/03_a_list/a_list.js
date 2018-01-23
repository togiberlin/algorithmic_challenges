function arrayToList(array) {
  let list = null;

  for (i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }

  return list;
}

function listToArray(list) {
  let array = [];

  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

/* --------- Helper functions --------- */

function prepend(element, list) {
  return { value: element, list: list };
}

function nth(list, number) {
  if (!list) {
    return undefined;
  } else if (number === 0) {
    return list.value;
  } else {
    return nth(list.rest, number - 1);
  }
}
