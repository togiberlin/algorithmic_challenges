const swapCase = (str) => {
  const array = str.split('');

  for (let i = 0; i < array.length; i++) {
    if (array[i].match(/[A-Z]/)) {
      array[i] = array[i].toLowerCase();
    } else if (array[i].match(/[a-z]/)) {
      array[i] = array[i].toUpperCase();
    }
  }

  return array.join('');
};

module.exports = swapCase;
