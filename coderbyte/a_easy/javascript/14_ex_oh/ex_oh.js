const exOh = (str) => {
  try {
    return str.match(/[x]/gi).length === str.match(/[o]/gi).length;
  } catch (err) {
    return false;
  }
};

module.exports = exOh;
