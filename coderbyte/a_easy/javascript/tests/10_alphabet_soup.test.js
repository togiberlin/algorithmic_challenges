const alphabetSoup = require('../10_alphabet_soup/alphabet_soup.js');

describe('alphabetSoup', () => {
  test('coderbyte returns bcdeeorty', () => {
    expect(alphabetSoup('coderbyte')).toBe('bcdeeorty');
  });

  test('love returns elov', () => {
    expect(alphabetSoup('love')).toBe('elov');
  });

  test('hello returns ehllo', () => {
    expect(alphabetSoup('hello')).toBe('ehllo');
  });

  test('yoop returns oopy', () => {
    expect(alphabetSoup('yoop')).toBe('oopy');
  });

  test('defbca returns abcdef', () => {
    expect(alphabetSoup('defbca')).toBe('abcdef');
  });

  test('comma returns acmmo', () => {
    expect(alphabetSoup('comma')).toBe('acmmo');
  });

  test('loldcb returns bcdllo', () => {
    expect(alphabetSoup('loldcb')).toBe('bcdllo');
  });

  test('letter returns eelrtt', () => {
    expect(alphabetSoup('letter')).toBe('eelrtt');
  });

  test('quack returns ackqu', () => {
    expect(alphabetSoup('quack')).toBe('ackqu');
  });

  test('ba returns ab', () => {
    expect(alphabetSoup('ba')).toBe('ab');
  });
});
