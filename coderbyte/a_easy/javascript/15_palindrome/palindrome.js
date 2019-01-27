const palindrome = (str) => {
  const result = str.replace(/[ ]/g, '');
  return result === result.split('').reverse().join('');
};

module.exports = palindrome;
