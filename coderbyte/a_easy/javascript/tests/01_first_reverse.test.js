const firstReverse = require('../01_first_reverse/first_reverse.js');

describe('firstReverse', () => {
  test('reverses a capitalized word', () => {
    expect(firstReverse('Coderbyte')).toBe('etybredoC');
  });

  test('reverses a capitalized sentence', () => {
    expect(firstReverse('I Love Coding')).toBe('gnidoC evoL I');
  });

  test('reverses an lower-/uppercase alphanumeric word', () => {
    expect(firstReverse('h333llLo')).toBe('oLll333h');
  });

  test('reverses a capitalized, alphanumeric word', () => {
    expect(firstReverse('Yo0')).toBe('0oY');
  });

  test('reverses a lowercase word', () => {
    expect(firstReverse('thisiscool')).toBe('loocsisiht');
  });

  test('reverses a lowercase word with special character', () => {
    expect(firstReverse('commacomma!')).toBe('!ammocammoc');
  });

  test('reverses numbers', () => {
    expect(firstReverse('123456789')).toBe('987654321');
  });

  test('reverses a lowercase, alphanumeric word with special character', () => {
    expect(firstReverse('lettersz!23z')).toBe('z32!zsrettel');
  });

  test('reverses a two character word', () => {
    expect(firstReverse('aq')).toBe('qa');
  });
});
