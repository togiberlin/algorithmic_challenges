const isEven = (number) => {
  if (number === 0) {
    return true;
  }

  if (number === 1) {
    return false;
  }

  return isEven(number - 2);
};

isEven(7); // returns false
isEven(8); // returns true
