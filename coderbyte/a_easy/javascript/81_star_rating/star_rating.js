function starRating(str) {
  let stars = parseFloat(str);
  let result = [];

  while (stars >= 1) {
    result.push("full");
    stars--;
  }

  if (stars >= 0.75) {
    result.push("full");
  } else if (stars >= 0.25) {
    result.push("half");
  }

  while (result.length < 5) {
    result.push("empty");
  }

  return result.join(" ");
}
