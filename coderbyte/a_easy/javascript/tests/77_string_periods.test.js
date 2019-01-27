const stringPeriods = require('../77_string_periods/string_periods.js');

describe('stringPeriods', () => {
  test('abcababcababcab returns abcab', () => {
    expect(stringPeriods('abcababcababcab')).toBe('abcab');
  });

  test('abababababab returns ababab', () => {
    expect(stringPeriods('abababababab')).toBe('ababab');
  });

  test('abcxabc returns -1', () => {
    expect(stringPeriods('abcxabc')).toBe(-1);
  });

  test('affedaaffed returns -1', () => {
    expect(stringPeriods('affedaaffed')).toBe(-1);
  });

  test('f returns -1', () => {
    expect(stringPeriods('f')).toBe(-1);
  });

  test('gg returns g', () => {
    expect(stringPeriods('gg')).toBe('g');
  });

  test('aaaaacccccacacaaaaacccccacac returns aaaaacccccacac', () => {
    expect(stringPeriods('aaaaacccccacacaaaaacccccacac'))
        .toBe('aaaaacccccacac');
  });

  test('aaaaaaaaaa returns aaaaa', () => {
    expect(stringPeriods('aaaaaaaaaa')).toBe('aaaaa');
  });

  test('abcabcabc returns abc', () => {
    expect(stringPeriods('abcabcabc')).toBe('abc');
  });

  test('tttttttrtttttttrtttttttrtttttttr returns tttttttrtttttttr', () => {
    expect(stringPeriods('tttttttrtttttttrtttttttrtttttttr'))
        .toBe('tttttttrtttttttr');
  });
});
