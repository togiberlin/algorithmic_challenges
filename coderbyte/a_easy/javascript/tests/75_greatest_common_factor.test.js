const gcf = require('../75_greatest_common_factor/greatest_common_factor.js');

describe('gcf', () => {
  test('[45, 12] returns 3', () => {
    expect(gcf([45, 12])).toBe(3);
  });

  test('[1, 6] returns 1', () => {
    expect(gcf([1, 6])).toBe(1);
  });

  // TODO
  test('[4, 32] returns 4', () => {
    expect(gcf([4, 32])).toBe(4);
  });

  test('[106, 212] returns 106', () => {
    expect(gcf([106, 212])).toBe(106);
  });

  test('[12, 12] returns 12', () => {
    expect(gcf([12, 12])).toBe(12);
  });

  test('[12, 11] returns 1', () => {
    expect(gcf([12, 11])).toBe(1);
  });

  test('[6, 167] returns 1', () => {
    expect(gcf([6, 167])).toBe(1);
  });

  test('[2345, 2562] returns 7', () => {
    expect(gcf([2345, 2562])).toBe(7);
  });

  test('[24, 92] returns 4', () => {
    expect(gcf([24, 92])).toBe(4);
  });

  test('[10, 100] returns 10', () => {
    expect(gcf([10, 100])).toBe(10);
  });
});
