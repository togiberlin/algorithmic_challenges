function gcf(arr) {
  let maximum = Math.max(...arr); // ES5: Math.max.apply(Math, arr);
  let minimum = Math.min(...arr); // ES5: Math.min.apply(Math, arr);

  for (i = minimum; i > 0; i--) {
    if (maximum % i === 0 && minimum % i === 0) {
      return i;
    }
  }
}
