const starRating = require('../81_star_rating/star_rating.js');

describe('starRating', () => {
  test('2.36 returns full full half empty empty', () => {
    expect(starRating('2.36')).toBe('full full half empty empty');
  });

  test('0.38 returns half empty empty empty empty', () => {
    expect(starRating('0.38')).toBe('half empty empty empty empty');
  });

  test('4.5 returns full full full full half', () => {
    expect(starRating('4.5')).toBe('full full full full half');
  });

  test('0.0 returns empty empty empty empty empty', () => {
    expect(starRating('0.0')).toBe('empty empty empty empty empty');
  });

  test('5.0 returns full full full full full', () => {
    expect(starRating('5.0')).toBe('full full full full full');
  });

  test('3.02 returns full full full empty empty', () => {
    expect(starRating('3.02')).toBe('full full full empty empty');
  });

  test('2.75 returns full full full empty empty', () => {
    expect(starRating('2.75')).toBe('full full full empty empty');
  });

  test('1.37 returns full half empty empty empty', () => {
    expect(starRating('1.37')).toBe('full half empty empty empty');
  });

  test('4.63 returns full full full full half', () => {
    expect(starRating('4.63')).toBe('full full full full half');
  });

  test('2.5 returns full full half empty empty', () => {
    expect(starRating('2.5')).toBe('full full half empty empty');
  });
});
