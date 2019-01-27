const serialNumber = require('../76_serial_number/serial_number.js');

describe('serialNumber', () => {
  test('224.315.218 returns true', () => {
    expect(serialNumber('224.315.218')).toBe(true);
  });

  test('11.124.667 returns false', () => {
    expect(serialNumber('11.124.667')).toBe(false);
  });

  test('114.568.112 returns true', () => {
    expect(serialNumber('114.568.112')).toBe(true);
  });

  test('1.1.1 returns false', () => {
    expect(serialNumber('1.1.1')).toBe(false);
  });

  test('123.456.789 returns true', () => {
    expect(serialNumber('123.456.789')).toBe(true);
  });

  test('999.111.222 returns false', () => {
    expect(serialNumber('999.111.222')).toBe(false);
  });

  test('123.456.99 returns false', () => {
    expect(serialNumber('123.456.99')).toBe(false);
  });

  test('4.1.1 returns false', () => {
    expect(serialNumber('4.1.1')).toBe(false);
  });

  test('567.126.678 returns true', () => {
    expect(serialNumber('567.126.678')).toBe(true);
  });

  test('569.126.889 returns true', () => {
    expect(serialNumber('569.126.889')).toBe(true);
  });
});
