const removeBrackets = require('../79_remove_brackets/remove_brackets.js');

describe('removeBrackets', () => {
  test('(())) returns 1', () => {
    expect(removeBrackets('(()))')).toBe(1);
  });

  test('(())()((( returns 3', () => {
    expect(removeBrackets('(())()(((')).toBe(3);
  });

  test.skip('(()( returns 2', () => {
    expect(removeBrackets('(()(')).toBe(2);
  });

  test('() returns 0', () => {
    expect(removeBrackets('()')).toBe(0);
  });

  test.skip(')(() returns 2', () => {
    expect(removeBrackets(')(()')).toBe(2);
  });

  test('((())) returns 0', () => {
    expect(removeBrackets('((()))')).toBe(0);
  });

  test('()()()()()()()()(((((( returns 6', () => {
    expect(removeBrackets('()()()()()()()()((((((')).toBe(6);
  });

  test.skip(')(() returns 2', () => {
    expect(removeBrackets(')(()')).toBe(2);
  });

  test('((()))()()(())) returns 1', () => {
    expect(removeBrackets('((()))()()(()))')).toBe(1);
  });

  test(')(()) returns 1', () => {
    expect(removeBrackets(')(())')).toBe(1);
  });
});
