const changingSequence =
  require('../31_changing_sequence/changing_sequence.js');

describe('changingSequence', () => {
  test('[1, 2, 4, 6, 4, 3, 1] returns ', () => {
    expect(changingSequence([1, 2, 4, 6, 4, 3, 1])).toBe(3);
  });

  test('[-4, -2, 9, 10] returns -1', () => {
    expect(changingSequence([-4, -2, 9, 10])).toBe(-1);
  });

  test('[1, 2, 1] returns 1', () => {
    expect(changingSequence([1, 2, 1])).toBe(1);
  });

  test('[1, 2, 3, 4, 5, 6, 7, 8, 9, 1]  returns ', () => {
    expect(changingSequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 1])).toBe(8);
  });

  test('[-3, -2, -1, 0, 2] returns -1', () => {
    expect(changingSequence([-3, -2, -1, 0, 2])).toBe(-1);
  });

  test('[4, 3, 2, 1] returns -1', () => {
    expect(changingSequence([4, 3, 2, 1])).toBe(-1);
  });

  test('[4, 5, 6, 5, 4, 2, 1] returns 2', () => {
    expect(changingSequence([4, 5, 6, 5, 4, 2, 1])).toBe(2);
  });

  test('[5, 4, 3, 2, 10, 11] returns 3', () => {
    expect(changingSequence([5, 4, 3, 2, 10, 11])).toBe(3);
  });

  test('[100, 101, 102, 101] returns 2', () => {
    expect(changingSequence([100, 101, 102, 101])).toBe(2);
  });

  test('[3, 2, 1, 0, -1, -2, 10] returns 5', () => {
    expect(changingSequence([3, 2, 1, 0, -1, -2, 10])).toBe(5);
  });
});
