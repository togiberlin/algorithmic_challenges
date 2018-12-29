const asciiConversion = (str) => {
  const array = str.split('');

  for (let i = 0; i < array.length; i++) {
    if (!/[ ]/.test(array[i])) {
      array[i] = array[i].charCodeAt(0);
    }
  }
  return array.join('');
};

module.exports = asciiConversion;
