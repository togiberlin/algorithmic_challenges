const exOh = require('../14_ex_oh/ex_oh.js');

describe('exOh', () => {
  test('xoxo returns true', () => {
    expect(exOh('xoxo')).toBe(true);
  });

  test('xxooo returns false', () => {
    expect(exOh('xxooo')).toBe(false);
  });

  test('xo returns true', () => {
    expect(exOh('xo')).toBe(true);
  });

  test('oooxxxoxox returns true', () => {
    expect(exOh('oooxxxoxox')).toBe(true);
  });

  test('o returns false', () => {
    expect(exOh('o')).toBe(false);
  });

  test('xoxooooooooooox returns false', () => {
    expect(exOh('')).toBe(false);
  });

  test('oxox returns true', () => {
    expect(exOh('oxox')).toBe(true);
  });

  test('xooooooooooxxxxxxxx returns false', () => {
    expect(exOh('xooooooooooxxxxxxxx')).toBe(false);
  });

  test('x returns false', () => {
    expect(exOh('x')).toBe(false);
  });

  test('xooxox returns true', () => {
    expect(exOh('xooxox')).toBe(true);
  });
});
