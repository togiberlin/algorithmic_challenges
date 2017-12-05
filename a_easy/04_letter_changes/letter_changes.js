function letterChanges(str) {
  var array = str.split("");
  var ascii_numbers = [];
  var lettersToCapitalize = ["a", "e", "i", "o", "u"];
  var result = [];

  // Convert alphabetic characters to ASCII charcode
  for (i = 0; i < array.length; i++) {
    if (/[A-Ya-y]/.test(array[i])) {
      ascii_numbers.push(array[i].charCodeAt(0));
    } else if (array[i] === "z" || array[i] === "Z") {
      ascii_numbers.push("a");
    } else {
      ascii_numbers.push(array[i]);
    }
  }

  // If it is of type number, increase ASCII charcode by 1
  for (i = 0; i < ascii_numbers.length; i++) {
    if (typeof ascii_numbers[i] === 'number') {
      ascii_numbers[i] += 1;
      result.push(String.fromCharCode(ascii_numbers[i]));
    } else {
      result.push(ascii_numbers[i]);
    }
  }

  // Convert array to string
  result = result.join("")

  // Capitalize all vowels
  lettersToCapitalize.forEach(function(vowel) {
    var lowercaseVowel = new RegExp(vowel, "g");
    result = result.replace(lowercaseVowel, vowel.toUpperCase())
  })

  return result;
}
