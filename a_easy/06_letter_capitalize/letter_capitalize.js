function letterCapitalize(str) {
  var array = str.split(" ");

  return array.map(function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
  }).join(" ");
}
