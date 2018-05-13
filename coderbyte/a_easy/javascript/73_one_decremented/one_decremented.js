const oneDecremented = num => {
  let counter = 0;
  num = num.toString().split('');

  for (i = 0; i < num.length - 1; i++) {
    if (parseInt(num[i]) === parseInt(num[i + 1]) + 1) {
      counter += 1;
    }
  }

  return counter;
};

module.exports = oneDecremented;
