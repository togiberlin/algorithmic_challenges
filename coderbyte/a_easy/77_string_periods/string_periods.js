function stringPeriods(str) {
  let array = str.split("");
  let substring = array.slice(0, Math.floor(array.length / 2));

  for (i = substring.length; i > 0; i--) {
    let regexPattern = new RegExp("^(" + `${substring.join("")}` + ")*$", "g");

    if (str.match(regexPattern)) {
      return substring.join("");
    } else {
      substring.pop();
    }
  }

  return -1;
}
