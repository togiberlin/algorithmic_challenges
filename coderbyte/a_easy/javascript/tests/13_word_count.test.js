const wordCount = require('../13_word_count/word_count.js');

describe('wordCount', () => {
  test('Coderbyte returns 1', () => {
    expect(wordCount('Coderbyte')).toBe(1);
  });

  test('I Love Coding returns 3', () => {
    expect(wordCount('I Love Coding')).toBe(3);
  });

  test('h333llLo returns 1', () => {
    expect(wordCount('h333llLo')).toBe(1);
  });

  test('Yo0 returns 1', () => {
    expect(wordCount('Yo0')).toBe(1);
  });

  test('this is cool cool cool returns 5', () => {
    expect(wordCount('this is cool cool cool')).toBe(5);
  });

  test('commacomma! returns 1', () => {
    expect(wordCount('commacomma!')).toBe(1);
  });

  test('1234 56789 returns 2', () => {
    expect(wordCount('1234 56789')).toBe(2);
  });

  test('letter sz!23 z returns 3', () => {
    expect(wordCount('letter sz!23 z')).toBe(3);
  });

  test('aq returns 1', () => {
    expect(wordCount('aq')).toBe(1);
  });

  test('b a c k returns 4', () => {
    expect(wordCount('b a c k')).toBe(4);
  });
});
