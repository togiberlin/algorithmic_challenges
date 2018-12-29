const swapCase = (string, offset) => {
  const array = string.split('');

  for (let i = 0; i < offset; i++) {
    if (array[i].match(/[a-z]/)) {
      array[i] = array[i].toUpperCase();
    } else if (array[i].match(/[A-Z]/)) {
      array[i] = array[i].toLowerCase();
    }
  }

  return array.join('');
};

module.exports = swapCase;
