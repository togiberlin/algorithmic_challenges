const overlappingRanges =
  require('../32_overlapping_ranges/overlapping_ranges.js');

describe('overlappingRanges', () => {
  test('[4,10,2,6,3] returns true', () => {
    expect(overlappingRanges([4, 10, 2, 6, 3])).toBe(true);
  });

  test('[5,11,1,5,1] returns true', () => {
    expect(overlappingRanges([5, 11, 1, 5, 1])).toBe(true);
  });

  test('[1,8,2,4,4] returns false', () => {
    expect(overlappingRanges([1, 8, 2, 4, 4])).toBe(false);
  });

  test('[4,40,20,23,5] returns false', () => {
    expect(overlappingRanges([4, 40, 20, 23, 5])).toBe(false);
  });

  test.skip('[1,2,1,3,1] returns true', () => {
    expect(overlappingRanges([1, 2, 1, 3, 1])).toBe(true);
  });

  test('[4,5,1,2,10] returns false', () => {
    expect(overlappingRanges([4, 5, 1, 2, 10])).toBe(false);
  });

  test.skip('[1,10,9,10,1] returns true', () => {
    expect(overlappingRanges([1, 10, 9, 10, 1])).toBe(true);
  });

  test('[1,100,2,3,4] returns false', () => {
    expect(overlappingRanges([1, 100, 2, 3, 4])).toBe(false);
  });

  test('[4,10,5,8,2] returns true', () => {
    expect(overlappingRanges([4, 10, 5, 8, 2])).toBe(true);
  });

  test('[2,12,5,12,34] returns false', () => {
    expect(overlappingRanges([2, 12, 5, 12, 34])).toBe(false);
  });
});
