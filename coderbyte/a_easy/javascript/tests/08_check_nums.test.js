const checkNums = require('../08_check_nums/check_nums.js');

describe('checkNums', () => {
  test('(1, 11) returns true', () => {
    expect(checkNums(1, 11)).toBe(true);
  });

  test('(122, 12) returns false', () => {
    expect(checkNums(122, 12)).toBe(false);
  });

  test('(3, 134) returns false', () => {
    expect(checkNums(3, 134)).toBe(true);
  });

  test('(45, 154) returns true', () => {
    expect(checkNums(45, 154)).toBe(true);
  });

  test('(5, 5) returns -1', () => {
    expect(checkNums(5, 5)).toBe(-1);
  });

  test('(63, 16) returns false', () => {
    expect(checkNums(63, 16)).toBe(false);
  });

  test('(37, 17) returns false', () => {
    expect(checkNums(37, 17)).toBe(false);
  });

  test('(82, 182) returns true', () => {
    expect(checkNums(82, 182)).toBe(true);
  });

  test('(9112, 19) returns false', () => {
    expect(checkNums(9112, 19)).toBe(false);
  });

  test('(101, 2110) returns true', () => {
    expect(checkNums(101, 2110)).toBe(true);
  });
});
