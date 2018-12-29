const longestWord = require('../03_longest_word/longest_word.js');

describe('longestWord', () => {
  test('picks the first word in a sentence with two equally long words', () => {
    expect(longestWord('hello world')).toBe('hello');
  });

  test('picks the longest word in a sentence', () => {
    expect(longestWord('this is some sort of sentence')).toBe('sentence');
  });

  test('ignores exclamation marks in a sentence', () => {
    expect(longestWord('longest word!!')).toBe('longest');
  });

  test('ignores special characters in a sentence', () => {
    expect(longestWord('a beautiful sentence^&!')).toBe('beautiful');
  });

  test('picks the longest word in a sentence with two words', () => {
    expect(longestWord('oxford press')).toBe('oxford');
  });

  test('picks the 1st number in sentence with two equally long numbers', () => {
    expect(longestWord('123456789 98765432')).toBe('123456789');
  });

  test('ignores special characters for two identical words', () => {
    expect(longestWord('letter after letter!!')).toBe('letter');
  });

  test('ignores whitespace', () => {
    expect(longestWord('a b c dee')).toBe('dee');
  });

  test('picks the longest word in sentence with special characters', () => {
    expect(longestWord('a confusing /:sentence:/[ this is not!!!!!!!~'))
        .toBe('confusing');
  });
});
