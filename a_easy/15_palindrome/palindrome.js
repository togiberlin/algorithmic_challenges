function palindrome(str) {
  str = str.replace(/[ ]/gi, "");
  return str === str.split("").reverse().join("");
}
