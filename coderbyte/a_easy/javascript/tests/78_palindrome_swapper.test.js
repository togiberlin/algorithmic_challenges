const palindromeSwapper =
  require('../78_palindrome_swapper/palindrome_swapper.js');

describe('palindromeSwapper', () => {
  test('rcaecar returns racecar', () => {
    expect(palindromeSwapper('rcaecar')).toBe('racecar');
  });

  test('anna returns anna', () => {
    expect(palindromeSwapper('anna')).toBe('anna');
  });

  test('kyaak returns kayak', () => {
    expect(palindromeSwapper('kyaak')).toBe('kayak');
  });

  test('ahhhhhhhhh returns -1', () => {
    expect(palindromeSwapper('ahhhhhhhhh')).toBe(-1);
  });

  test('notpossible returns -1', () => {
    expect(palindromeSwapper('notpossible')).toBe(-1);
  });

  test('madam returns -1', () => {
    expect(palindromeSwapper('madam')).toBe(-1);
  });

  test('maadm returns madam', () => {
    expect(palindromeSwapper('maadm')).toBe('madam');
  });

  test('redder returns redder', () => {
    expect(palindromeSwapper('redder')).toBe('redder');
  });

  test('erdder returns redder', () => {
    expect(palindromeSwapper('erdder')).toBe('redder');
  });

  test('ortator returns rotator', () => {
    expect(palindromeSwapper('ortator')).toBe('rotator');
  });
});
