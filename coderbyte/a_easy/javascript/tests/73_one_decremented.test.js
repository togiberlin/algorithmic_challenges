const oneDecremented = require('../73_one_decremented/one_decremented.js');

describe('oneDecremented', () => {
  test('45 returns 0', () => {
    expect(oneDecremented(45)).toBe(0);
  });

  test('56 returns 0', () => {
    expect(oneDecremented(56)).toBe(0);
  });

  test('9876541110 returns 6', () => {
    expect(oneDecremented(9876541110)).toBe(6);
  });

  test('5655984 returns 2', () => {
    expect(oneDecremented(5655984)).toBe(2);
  });

  test('651 returns 1', () => {
    expect(oneDecremented(651)).toBe(1);
  });

  test('999 returns 0', () => {
    expect(oneDecremented(999)).toBe(0);
  });

  test('621 returns 1', () => {
    expect(oneDecremented(621)).toBe(1);
  });

  test('123 returns 0', () => {
    expect(oneDecremented(123)).toBe(0);
  });

  test('9845634363 returns 2', () => {
    expect(oneDecremented(9845634363)).toBe(2);
  });

  test('10 returns 1', () => {
    expect(oneDecremented(10)).toBe(1);
  });
});
