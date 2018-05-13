const simpleAdding = require('../05_simple_adding/simple_adding.js');

describe('simpleAdding', () => {
  test('45 returns 1035', () => {
    expect(simpleAdding(45)).toBe(1035);
  });

  test('13 returns 91', () => {
    expect(simpleAdding(13)).toBe(91);
  });

  test('2 returns 3', () => {
    expect(simpleAdding(2)).toBe(3);
  });

  test('5 returns 15', () => {
    expect(simpleAdding(5)).toBe(15);
  });

  test('156 returns 12246', () => {
    expect(simpleAdding(156)).toBe(12246);
  });

  test('999 returns 499500', () => {
    expect(simpleAdding(999)).toBe(499500);
  });

  test('67 returns 2278', () => {
    expect(simpleAdding(67)).toBe(2278);
  });

  test('123 returns 7626', () => {
    expect(simpleAdding(123)).toBe(7626);
  });

  test('9 returns 45', () => {
    expect(simpleAdding(9)).toBe(45);
  });

  test('10 returns 55', () => {
    expect(simpleAdding(10)).toBe(55);
  });
});
