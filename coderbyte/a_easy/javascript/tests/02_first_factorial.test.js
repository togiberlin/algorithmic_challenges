const firstFactorial = require('../02_first_factorial/first_factorial.js');

describe('firstFactorial', () => {
  test('calculates the factorial of 3', () => {
    expect(firstFactorial(3)).toBe(6);
  });

  test('calculates the factorial of 4', () => {
    expect(firstFactorial(4)).toBe(24);
  });

  test('calculates the factorial of 5', () => {
    expect(firstFactorial(5)).toBe(120);
  });

  test('calculates the factorial of 6', () => {
    expect(firstFactorial(6)).toBe(720);
  });

  test('calculates the factorial of 7', () => {
    expect(firstFactorial(7)).toBe(5040);
  });

  test('calculates the factorial of 8', () => {
    expect(firstFactorial(8)).toBe(40320);
  });

  test('calculates the factorial of 9', () => {
    expect(firstFactorial(9)).toBe(362880);
  });

  test('calculates the factorial of 10', () => {
    expect(firstFactorial(10)).toBe(3628800);
  });
});
