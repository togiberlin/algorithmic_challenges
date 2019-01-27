const vowelCount = require('../12_vowel_count/vowel_count.js');

describe('vowelCount', () => {
  test('coderbyte returns 3', () => {
    expect(vowelCount('coderbyte')).toBe(3);
  });

  test('love returns 2', () => {
    expect(vowelCount('love')).toBe(2);
  });

  test('hello returns 2', () => {
    expect(vowelCount('hello')).toBe(2);
  });

  test('yoop returns 2', () => {
    expect(vowelCount('yoop')).toBe(2);
  });

  test('defbca returns 2', () => {
    expect(vowelCount('defbca')).toBe(2);
  });

  test('comma returns 2', () => {
    expect(vowelCount('comma')).toBe(2);
  });

  test('aaaeeebziiiooouu returns 14', () => {
    expect(vowelCount('aaaeeebziiiooouu')).toBe(14);
  });

  test('letter returns 2', () => {
    expect(vowelCount('letter')).toBe(2);
  });

  test('quaaaaiizick returns 8', () => {
    expect(vowelCount('quaaaaiizick')).toBe(8);
  });

  test('bzz8* returns 0', () => {
    expect(vowelCount('bzz8*')).toBe(0);
  });
});
