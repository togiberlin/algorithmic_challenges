const range = (start, end, step = 1) => {
  const array = [];

  if (step >= 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }

  return array;
};

const sum = (array) => {
  return array.reduce((a, b) => a + b);
};

range(1, 10); // creates array of 1 to 10
sum(range(1, 10)); // returns 55
range(1, 10, 2); // [1, 3, 5, 7, 9]
range(5, 2, -1); // [5, 4, 3, 2]
