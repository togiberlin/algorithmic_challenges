const swapCase = require('../24_swap_case/swap_case.js');

describe('swapCase', () => {
  test('coderbyte returns CODERBYTE', () => {
    expect(swapCase('coderbyte')).toBe('CODERBYTE');
  });

  test('LOVE returns love', () => {
    expect(swapCase('LOVE')).toBe('love');
  });

  test('Hello2 World returns hELLO2 wORLD', () => {
    expect(swapCase('Hello2 World')).toBe('hELLO2 wORLD');
  });

  test('yeahHH returns YEAHhh', () => {
    expect(swapCase('yeahHH')).toBe('YEAHhh');
  });

  test('i love cAke returns I LOVE CaKE', () => {
    expect(swapCase('i love cAke')).toBe('I LOVE CaKE');
  });

  test('COMMa returns commA', () => {
    expect(swapCase('COMMa')).toBe('commA');
  });

  test('abcdE returns ABCDe', () => {
    expect(swapCase('abcdE')).toBe('ABCDe');
  });

  test('letter returns LETTER', () => {
    expect(swapCase('letter')).toBe('LETTER');
  });

  test('yolO returns YOLo', () => {
    expect(swapCase('yolO')).toBe('YOLo');
  });

  test('123gg))(( returns 123GG))((', () => {
    expect(swapCase('123gg))((')).toBe('123GG))((');
  });
});
