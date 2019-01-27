const arithGeo = require('../16_arith_geo/arith_geo.js');

describe('arithGeo', () => {
  test('[1,2,3,4] returns Arithmetic', () => {
    expect(arithGeo([1, 2, 3, 4])).toBe('Arithmetic');
  });

  test('[2,6,18,54] returns Geometric', () => {
    expect(arithGeo([2, 6, 18, 54])).toBe('Geometric');
  });

  test('[1,2,3,4,5,10,20] returns -1', () => {
    expect(arithGeo([1, 2, 3, 4, 5, 10, 20])).toBe(-1);
  });

  test('[1,2,3,4,5,6,7,88,2] returns -1', () => {
    expect(arithGeo([1, 2, 3, 4, 5, 6, 7, 88, 2])).toBe(-1);
  });

  test('[100,200,400,800,1600] returns Geometric', () => {
    expect(arithGeo([100, 200, 400, 800, 1600])).toBe('Geometric');
  });

  test('[10,110,210,310,410,511] returns -1', () => {
    expect(arithGeo([10, 110, 210, 310, 410, 511])).toBe(-1);
  });

  test('[10,110,210,310,410] returns Arithmetic', () => {
    expect(arithGeo([10, 110, 210, 310, 410])).toBe('Arithmetic');
  });

  test('[5,10,20,40,80] returns Geometric', () => {
    expect(arithGeo([5, 10, 20, 40, 80])).toBe('Geometric');
  });

  test('[-3,-4,-5,-6,-7] returns Arithmetic', () => {
    expect(arithGeo([-3, -4, -5, -6, -7])).toBe('Arithmetic');
  });

  test('[1,5,9] returns Arithmetic', () => {
    expect(arithGeo([1, 5, 9])).toBe('Arithmetic');
  });
});
