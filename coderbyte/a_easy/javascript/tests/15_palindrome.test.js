const palindrome = require('../15_palindrome/palindrome.js');

describe('palindrome', () => {
  test('racecar returns true', () => {
    expect(palindrome('racecar')).toBe(true);
  });

  test('eye returns true', () => {
    expect(palindrome('eye')).toBe(true);
  });

  test('dont nod returns true', () => {
    expect(palindrome('dont nod')).toBe(true);
  });

  test('rats live on no evil star returns true', () => {
    expect(palindrome('rats live on no evil star')).toBe(true);
  });

  test('do geese see god returns true', () => {
    expect(palindrome('do geese see god')).toBe(true);
  });

  test('never odd or even returns true', () => {
    expect(palindrome('never odd or even')).toBe(true);
  });

  test('rotor plus three returns false', () => {
    expect(palindrome('rotor plus three')).toBe(false);
  });

  test('nun returns true', () => {
    expect(palindrome('nun')).toBe(true);
  });

  test('radars returns false', () => {
    expect(palindrome('radars')).toBe(false);
  });

  test('abcdef returns false', () => {
    expect(palindrome('abcdef')).toBe(false);
  });
});
