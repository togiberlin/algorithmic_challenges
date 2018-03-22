function palindrome(str) {
  str = str.replace(/[ ]/g, "");
  return str === str.split("").reverse().join("");
}
