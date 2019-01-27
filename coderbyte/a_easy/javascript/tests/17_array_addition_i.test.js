const arrayAdditionI = require('../17_array_addition_i/array_addition_i.js');

describe('arrayAdditionI', () => {
  test('[1,2,3,4] returns true', () => {
    expect(arrayAdditionI([1, 2, 3, 4])).toBe(true);
  });

  test('[2,6,18] returns false', () => {
    expect(arrayAdditionI([2, 6, 18])).toBe(false);
  });

  test('[10,20,30,40,100] returns true', () => {
    expect(arrayAdditionI([10, 20, 30, 40, 100])).toBe(true);
  });

  test('[10,12,500,1,-5,1,0] returns false', () => {
    expect(arrayAdditionI([10, 12, 500, 1, -5, 1, 0])).toBe(false);
  });

  test('[-2,-3,-4,-1,100] returns false', () => {
    expect(arrayAdditionI([-2, -3, -4, -1, 100])).toBe(false);
  });

  test('[54,49,1,0,7,4] returns true', () => {
    expect(arrayAdditionI([54, 49, 1, 0, 7, 4])).toBe(true);
  });

  test('[3,4,5,7] returns true', () => {
    expect(arrayAdditionI([3, 4, 5, 7])).toBe(true);
  });

  test('[1,1,1,1,6] returns false', () => {
    expect(arrayAdditionI([1, 1, 1, 1, 6])).toBe(false);
  });

  test('[2,4,6,12,92] returns false', () => {
    expect(arrayAdditionI([2, 4, 6, 12, 92])).toBe(false);
  });

  test('[31,2,90,50,7] returns true', () => {
    expect(arrayAdditionI([31, 2, 90, 50, 7])).toBe(true);
  });
});
