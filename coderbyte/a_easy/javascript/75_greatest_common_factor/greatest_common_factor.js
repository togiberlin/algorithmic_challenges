const gcf = arr => {
  const maximum = Math.max(...arr);
  const minimum = Math.min(...arr);

  for (i = minimum; i > 0; i--) {
    if (maximum % i === 0 && minimum % i === 0) {
      return i;
    }
  }
};

module.exports = gcf;
