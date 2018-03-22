function superIncreasing(arr) {
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (sum >= arr[i]) {
      return false;
    }
    sum += arr[i];
  }

  return true;
}
