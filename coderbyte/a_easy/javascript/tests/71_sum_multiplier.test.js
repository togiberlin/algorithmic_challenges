const sumMultiplier = require('../71_sum_multiplier/sum_multiplier.js');

describe('sumMultiplier', () => {
  test('[2, 5, 6, -6, 16, 2, 3, 6, 5, 3] returns true', () => {
    expect(sumMultiplier([2, 5, 6, -6, 16, 2, 3, 6, 5, 3])).toBe(true);
  });

  test('[2, 2, 2, 2, 4, 1] returns false', () => {
    expect(sumMultiplier([2, 2, 2, 2, 4, 1])).toBe(false);
  });

  test('[1, 1, 2, 10, 3, 1, 12] returns true', () => {
    expect(sumMultiplier([1, 1, 2, 10, 3, 1, 12])).toBe(true);
  });

  test('[1, 2, 1] returns false', () => {
    expect(sumMultiplier([1, 2, 1])).toBe(false);
  });

  test('[2] returns false', () => {
    expect(sumMultiplier([2])).toBe(false);
  });

  test('[-3, -4, -4, -4] returns true', () => {
    expect(sumMultiplier([-3, -4, -4, -4])).toBe(true);
  });

  test('[4, 5, 5, 5, 12] returns false', () => {
    expect(sumMultiplier([4, 5, 5, 5, 12])).toBe(false);
  });

  test('[4, 5, 5, 12] returns true', () => {
    expect(sumMultiplier([4, 5, 5, 12])).toBe(true);
  });

  test('[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] returns false', () => {
    expect(sumMultiplier([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])).toBe(false);
  });

  test('[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 101, 22] returns true', () => {
    expect(sumMultiplier([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 101, 22]))
        .toBe(true);
  });
});
