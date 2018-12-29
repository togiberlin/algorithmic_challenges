const reverseArray = (array) => {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
};

test1 = [1, 2, 4, 6, 7];
console.log('Original array: [' + test1 + ']');
console.log('Reversed array: [' + reverseArray(test1) + ']');

const reverseArrayInPlace = (array) => {
  const swapArray = array.slice(); // create a copy of array

  for (let i = 0; i < array.length; i ++) {
    array[i] = swapArray[array.length - 1 - i];
  }

  return array;
};

test2 = [1, 7, 8, 10, 12];
console.log('Original array: [' + test2 + ']');
console.log('Reversed array: [' + reverseArrayInPlace(test2) + ']');
