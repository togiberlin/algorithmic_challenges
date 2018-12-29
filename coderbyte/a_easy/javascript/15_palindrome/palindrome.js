const palindrome = (str) => {
  const result = str.replace(/[ ]/g, '');
  return result === str.split('').reverse().join('');
};

module.exports = palindrome;
