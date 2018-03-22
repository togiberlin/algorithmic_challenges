function simpleEvens(num) {
  let array = num.toString().split("");

  for (i = 0; i < array.length; i++) {
    array[i] = array[i] % 2 === 0;
  }

  if (array.includes(false)) {
    return false;
  } else {
    return true;
  }
}
