const camelCase = require('../67_camel_case/camel_case.js');

describe('camelCase', () => {
  test('BOB loves-coding returns bobLovesCoding', () => {
    expect(camelCase('BOB loves-coding')).toBe('bobLovesCoding');
  });

  test('cats AND*Dogs-are Awesome returns catsAndDogsAreAwesome', () => {
    expect(camelCase('cats AND*Dogs-are Awesome'))
        .toBe('catsAndDogsAreAwesome');
  });

  test('a b c d-e-f%g returns aBCDEFG', () => {
    expect(camelCase('a b c d-e-f%g')).toBe('aBCDEFG');
  });

  test('coderbyte returns coderbyte', () => {
    expect(camelCase('coderbyte')).toBe('coderbyte');
  });

  test('apples and oranges returns applesAndOranges', () => {
    expect(camelCase('apples and oranges')).toBe('applesAndOranges');
  });

  test('aa returns aa', () => {
    expect(camelCase('aa')).toBe('aa');
  });

  test('javaSCRIPT is The-BEST returns javascriptIsTheBest', () => {
    expect(camelCase('javaSCRIPT is The-BEST')).toBe('javascriptIsTheBest');
  });

  test('abcdef abcdef returns abcdefAbcdef', () => {
    expect(camelCase('abcdef abcdef')).toBe('abcdefAbcdef');
  });

  test('a-b-paper-house returns aBPaperHouse', () => {
    expect(camelCase('a-b-paper-house')).toBe('aBPaperHouse');
  });

  test('ginger-brea d mAN returns gingerBreaDMan', () => {
    expect(camelCase('ginger-brea d mAN')).toBe('gingerBreaDMan');
  });
});
