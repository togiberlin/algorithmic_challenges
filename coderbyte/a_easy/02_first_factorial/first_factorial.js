function firstFactorial(num) {
  if (num <= 2) {
    return num;
  } else {
    return num * firstFactorial(num - 1);
  }
}