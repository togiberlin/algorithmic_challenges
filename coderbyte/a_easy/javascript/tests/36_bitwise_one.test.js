const bitwiseOne = require('../36_bitwise_one/bitwise_one.js');

describe('bitwiseOne', () => {
  test('["1001", "0100"] returns 1101', () => {
    expect(bitwiseOne(['1001', '0100'])).toBe('1101');
  });

  test('["100", "000"] returns 100', () => {
    expect(bitwiseOne(['100', '000'])).toBe('100');
  });

  test('["00011", "01010"] returns 01011', () => {
    expect(bitwiseOne(['00011', '01010'])).toBe('01011');
  });

  test('["101","000"] returns 101', () => {
    expect(bitwiseOne(['101', '000'])).toBe('101');
  });

  test('["1","0"] returns 1', () => {
    expect(bitwiseOne(['1', '0'])).toBe('1');
  });

  test('["111","111"] returns 111', () => {
    expect(bitwiseOne(['111', '111'])).toBe('111');
  });

  test('["000","000"] returns 000', () => {
    expect(bitwiseOne(['000', '000'])).toBe('000');
  });

  test('["1111110","0000001"] returns 1111111', () => {
    expect(bitwiseOne(['1111110', '0000001'])).toBe('1111111');
  });

  test('["1100","0111"] returns 1111', () => {
    expect(bitwiseOne(['1100', '0111'])).toBe('1111');
  });

  test('["101010101","000000011"] returns 101010111', () => {
    expect(bitwiseOne(['101010101', '000000011'])).toBe('101010111');
  });
});
