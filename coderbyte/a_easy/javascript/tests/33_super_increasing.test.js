const superIncreasing = require('../33_super_increasing/super_increasing.js');

describe('superIncreasing', () => {
  test('[1, 3, 6, 13, 54] returns true', () => {
    expect(superIncreasing([1, 3, 6, 13, 54])).toBe(true);
  });

  test('[1,2,3,4] returns false', () => {
    expect(superIncreasing([1, 2, 3, 4])).toBe(false);
  });

  test('[1,2,5,10] returns true', () => {
    expect(superIncreasing([1, 2, 5, 10])).toBe(true);
  });

  test('[0,0,0,2,2] returns false', () => {
    expect(superIncreasing([0, 0, 0, 2, 2])).toBe(false);
  });

  test('[2,5,10,100] returns true', () => {
    expect(superIncreasing([2, 5, 10, 100])).toBe(true);
  });

  test('[1,2,4,8,10,200,201] returns false', () => {
    expect(superIncreasing([1, 2, 4, 8, 10, 200, 201])).toBe(false);
  });

  test('[0,2,3,10,11,50,200] returns false', () => {
    expect(superIncreasing([0, 2, 3, 10, 11, 50, 200])).toBe(false);
  });

  test('[5,6,12,25] returns true', () => {
    expect(superIncreasing([5, 6, 12, 25])).toBe(true);
  });

  test('[2,3] returns true', () => {
    expect(superIncreasing([2, 3])).toBe(true);
  });

  test('[3,3] returns false', () => {
    expect(superIncreasing([3, 3])).toBe(false);
  });
});
