const timeConvert = require('../09_time_convert/time_convert.js');

describe('timeConvert', () => {
  test('120 returns 2:0', () => {
    expect(timeConvert(120)).toBe('2:0');
  });

  test('60 returns 1:0', () => {
    expect(timeConvert(60)).toBe('1:0');
  });

  test('61 returns 1:1', () => {
    expect(timeConvert(61)).toBe('1:1');
  });

  test('121 returns 2:1', () => {
    expect(timeConvert(121)).toBe('2:1');
  });

  test('45 returns 0:45', () => {
    expect(timeConvert(45)).toBe('0:45');
  });

  test('125 returns 2:5', () => {
    expect(timeConvert(125)).toBe('2:5');
  });

  test('47 returns 0:47', () => {
    expect(timeConvert(47)).toBe('0:47');
  });

  test('100 returns 1:40', () => {
    expect(timeConvert(100)).toBe('1:40');
  });

  test('1 returns 0:1', () => {
    expect(timeConvert(1)).toBe('0:1');
  });

  test('368 returns 6:8', () => {
    expect(timeConvert(368)).toBe('6:8');
  });
});
