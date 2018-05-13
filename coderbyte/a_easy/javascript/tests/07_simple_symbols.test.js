const simpleSymbols = require('../07_simple_symbols/simple_symbols.js');

describe('simpleSymbols', () => {
  test('\'+d+\' returns true', () => {
    expect(simpleSymbols('+d+')).toBe(true);
  });

  test('\'+d===+a+\' returns false', () => {
    expect(simpleSymbols('+d===+a+')).toBe(false);
  });

  test('\'aaaa\' returns false', () => {
    expect(simpleSymbols('aaaa')).toBe(false);
  });

  test('\'+z+z+z+\' returns true', () => {
    expect(simpleSymbols('+z+z+z+')).toBe(true);
  });

  test('\'+a=\' returns false', () => {
    expect(simpleSymbols('+a=')).toBe(false);
  });

  test('\'2+a+a+\' returns true', () => {
    expect(simpleSymbols('2+a+a+')).toBe(true);
  });

  test('\'+a++\' returns true', () => {
    expect(simpleSymbols('+a++')).toBe(true);
  });

  test('\'+z+z+==+a+\' returns true', () => {
    expect(simpleSymbols('+z+z+==+a+')).toBe(true);
  });

  test('\'==a+\' returns false', () => {
    expect(simpleSymbols('==a+')).toBe(false);
  });

  test('\'b\' returns false', () => {
    expect(simpleSymbols('b')).toBe(false);
  });
});
