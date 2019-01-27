const otherProducts = require('../37_other_products/other_products.js');

describe('otherProducts', () => {
  test('[1,2,3,4,5] returns 120-60-40-30-24', () => {
    expect(otherProducts([1, 2, 3, 4, 5])).toBe('120-60-40-30-24');
  });

  test('[1,4,3] returns 12-3-4', () => {
    expect(otherProducts([1, 4, 3])).toBe('12-3-4');
  });

  test('[3,1,2,6] returns 12-36-18-6', () => {
    expect(otherProducts([3, 1, 2, 6])).toBe('12-36-18-6');
  });

  test('[1,1,1] returns 1-1-1', () => {
    expect(otherProducts([1, 1, 1])).toBe('1-1-1');
  });

  test('[2,3,1,1] returns 3-2-6-6', () => {
    expect(otherProducts([2, 3, 1, 1])).toBe('3-2-6-6');
  });

  test('[2,2,2,2] returns 8-8-8-8', () => {
    expect(otherProducts([2, 2, 2, 2])).toBe('8-8-8-8');
  });

  test('[9,2,3,1] returns 6-27-18-54', () => {
    expect(otherProducts([9, 2, 3, 1])).toBe('6-27-18-54');
  });

  test('[1,4,6,19,3] returns 1368-342-228-72-456', () => {
    expect(otherProducts([1, 4, 6, 19, 3])).toBe('1368-342-228-72-456');
  });

  test('[1,2,4,8,16] returns 1024-512-256-128-64', () => {
    expect(otherProducts([1, 2, 4, 8, 16])).toBe('1024-512-256-128-64');
  });

  test('[1,6] returns 6-1', () => {
    expect(otherProducts([1, 6])).toBe('6-1');
  });
});
