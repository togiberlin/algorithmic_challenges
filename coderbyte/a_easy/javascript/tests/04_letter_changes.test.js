const letterChanges = require('../04_letter_changes/letter_changes.js');

describe('letterChanges', () => {
  test('\'hello world\' returns \'Ifmmp xpsmE\'', () => {
    expect(letterChanges('hello world')).toBe('Ifmmp xpsmE');
  });

  test('\'sentence\' returns \'tfOUfOdf\'', () => {
    expect(letterChanges('sentence')).toBe('tfOUfOdf');
  });

  test('\'replace!*\' returns \'sfqmbdf!*\'', () => {
    expect(letterChanges('replace!*')).toBe('sfqmbdf!*');
  });

  test('\'coderbyte\' returns \'dpEfsczUf\'', () => {
    expect(letterChanges('coderbyte')).toBe('dpEfsczUf');
  });

  test('\'beautiful^\' returns \'cfbvUjgvm^\'', () => {
    expect(letterChanges('beautiful^')).toBe('cfbvUjgvm^');
  });

  test('\'oxford\' returns \'pygpsE\'', () => {
    expect(letterChanges('oxford')).toBe('pygpsE');
  });

  test('\'this long cake@&\' returns \'UIjt mpOh dblf@&\'', () => {
    expect(letterChanges('this long cake@&')).toBe('UIjt mpOh dblf@&');
  });

  test('\'a b c dee\' returns \'b c d Eff\'', () => {
    expect(letterChanges('a b c dee')).toBe('b c d Eff');
  });

  test('\'a confusing /:sentence:/[ this is not!!!!!!!~\' returns' +
    '\'b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~\'', () => {
    expect(letterChanges('a confusing /:sentence:/[ this is not!!!!!!!~'))
        .toBe('b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~');
  });
});
