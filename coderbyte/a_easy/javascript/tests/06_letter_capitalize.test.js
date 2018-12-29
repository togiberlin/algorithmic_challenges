const letterCapitalize =
  require('../06_letter_capitalize/letter_capitalize.js');

describe('letterCapitalize', () => {
  test('\'hello world\' returns \'Hello World\'', () => {
    expect(letterCapitalize('hello world')).toBe('Hello World');
  });

  test('\'i love coding\' returns \'I Love Coding\'', () => {
    expect(letterCapitalize('i love coding')).toBe('I Love Coding');
  });

  test('\'h3llo yo people\' returns \'H3llo Yo People\'', () => {
    expect(letterCapitalize('h3llo yo people')).toBe('H3llo Yo People');
  });

  test('\'yooooooo hi\' returns \'Yooooooo Hi\'', () => {
    expect(letterCapitalize('yooooooo hi')).toBe('Yooooooo Hi');
  });

  test('\'thisiscool\' returns \'Thisiscool\'', () => {
    expect(letterCapitalize('thisiscool')).toBe('Thisiscool');
  });

  test('\'oxford comma\' returns \'Oxford Comma\'', () => {
    expect(letterCapitalize('oxford comma')).toBe('Oxford Comma');
  });

  test('\'letter by letter go\' returns \'Letter By Letter Go\'', () => {
    expect(letterCapitalize('letter by letter go')).toBe('Letter By Letter Go');
  });

  test('\'a b c d e f\' returns \'A B C D E F\'', () => {
    expect(letterCapitalize('a b c d e f')).toBe('A B C D E F');
  });

  test('\'jelloupin here\' returns \'Jelloupin Here\'', () => {
    expect(letterCapitalize('jelloupin here')).toBe('Jelloupin Here');
  });
});
