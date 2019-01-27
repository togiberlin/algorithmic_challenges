const abCheck = require('../11_ab_check/ab_check.js');

describe('abCheck', () => {
  test('after it returns false', () => {
    expect(abCheck('after it')).toBe(false);
  });

  test('Laura sobs returns true', () => {
    expect(abCheck('Laura sobs')).toBe(true);
  });

  test('away obe returns true', () => {
    expect(abCheck('away obe')).toBe(true);
  });

  test('noah obe returns true', () => {
    expect(abCheck('noah obe')).toBe(true);
  });

  test('far ebs returns true', () => {
    expect(abCheck('far ebs')).toBe(true);
  });

  test('aaaaddddd returns false', () => {
    expect(abCheck('aaaaddddd')).toBe(false);
  });

  test('123advb returns false', () => {
    expect(abCheck('123advb')).toBe(false);
  });

  test('123adzvb returns true', () => {
    expect(abCheck('123adzvb')).toBe(true);
  });

  test('abccccazzzb returns true', () => {
    expect(abCheck('abccccazzzb')).toBe(true);
  });

  test('bzzza returns true', () => {
    expect(abCheck('bzzza')).toBe(true);
  });
});
