const stringPeriods = (str) => {
  const array = str.split('');
  const substring = array.slice(0, Math.floor(array.length / 2));

  for (let i = substring.length; i > 0; i--) {
    const regexPattern = new RegExp(`^(${substring.join('')})*$`, 'g');

    if (str.match(regexPattern)) {
      return substring.join('');
    } else {
      substring.pop();
    }
  }

  return -1;
};

module.exports = stringPeriods;
