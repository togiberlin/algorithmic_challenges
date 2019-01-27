const elementMerger = require('../74_element_merger/element_merger.js');

describe('elementMerger', () => {
  test('[4, 5, 1, 2, 7 returns 1', () => {
    expect(elementMerger([4, 5, 1, 2, 7])).toBe(1);
  });

  test('[5,7,16,1,2] returns 7', () => {
    expect(elementMerger([5, 7, 16, 1, 2])).toBe(7);
  });

  test('[1, 1, 1, 2] returns 1', () => {
    expect(elementMerger([1, 1, 1, 2])).toBe(1);
  });

  test('[1, 9] returns 8', () => {
    expect(elementMerger([1, 9])).toBe(8);
  });

  test('[1, 1, 1, 1] returns 0', () => {
    expect(elementMerger([1, 1, 1, 1])).toBe(0);
  });

  test('[5, 6, 1, 2, 3 returns 4', () => {
    expect(elementMerger([5, 6, 1, 2, 3])).toBe(4);
  });

  test('[12, 2, 4, 15, 11] returns 1', () => {
    expect(elementMerger([12, 2, 4, 15, 11])).toBe(1);
  });

  test('[5, 6, 7, 1] returns 5', () => {
    expect(elementMerger([5, 6, 7, 1])).toBe(5);
  });

  test('[9, 8, 7, 1, 2, 3] returns 0', () => {
    expect(elementMerger([9, 8, 7, 1, 2, 3])).toBe(0);
  });

  test('[8, 100] returns 92', () => {
    expect(elementMerger([8, 100])).toBe(92);
  });
});
