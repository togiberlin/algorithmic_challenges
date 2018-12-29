const letterChanges = (str) => {
  const array = str.split('');
  const lettersToCapitalize = ['a', 'e', 'i', 'o', 'u'];
  const asciiNumbers = [];
  let result = [];

  // Convert alphabetic characters to ASCII charcode
  for (let i = 0; i < array.length; i++) {
    if (/[A-Ya-y]/.test(array[i])) {
      asciiNumbers.push(array[i].charCodeAt(0));
    } else if (array[i] === 'z' || array[i] === 'Z') {
      asciiNumbers.push('a');
    } else {
      asciiNumbers.push(array[i]);
    }
  }

  // If it is of type number, increase ASCII charcode by 1
  for (let i = 0; i < asciiNumbers.length; i++) {
    if (typeof asciiNumbers[i] === 'number') {
      asciiNumbers[i] += 1;
      result.push(String.fromCharCode(asciiNumbers[i]));
    } else {
      result.push(asciiNumbers[i]);
    }
  }

  // Convert array to string
  result = result.join('');

  // Capitalize all vowels
  lettersToCapitalize.forEach((vowel) => {
    const lowercaseVowel = new RegExp(vowel, 'g');
    result = result.replace(lowercaseVowel, vowel.toUpperCase());
  });

  return result;
};

module.exports = letterChanges;
