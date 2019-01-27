const rectangleArea = require('../35_rectangle_area/rectangle_area.js');

describe('rectangleArea', () => {
  test('["(0 0)", "(3 0)", "(0 2)", "(3 2)"] returns 6', () => {
    expect(rectangleArea(['(0 0)', '(3 0)', '(0 2)', '(3 2)'])).toBe(6);
  });

  test('["(1 1)","(1 3)","(3 1)","(3 3)"] returns 4', () => {
    expect(rectangleArea(['(1 1)', '(1 3)', '(3 1)', '(3 3)'])).toBe(4);
  });

  test('["(0 0)","(1 0)","(1 1)","(0 1)"] returns 1', () => {
    expect(rectangleArea(['(0 0)', '(1 0)', '(1 1)', '(0 1)'])).toBe(1);
  });

  test('["(-1 -1)","(0 0)","(-1 0)","(0 -1)"] returns 1', () => {
    expect(rectangleArea(['(-1 -1)', '(0 0)', '(-1 0)', '(0 -1)'])).toBe(1);
  });

  test('["(-2 -2)","(0 0)","(-2 0)","(0 -2)"] returns 4', () => {
    expect(rectangleArea(['(-2 -2)', '(0 0)', '(-2 0)', '(0 -2)'])).toBe(4);
  });

  test('["(3 3)","(0 0)","(3 0)","(0 3)"] returns 9', () => {
    expect(rectangleArea(['(3 3)', '(0 0)', '(3 0)', '(0 3)'])).toBe(9);
  });

  test('["(0 0)","(8 8)","(0 8)","(8 0)"] returns 64', () => {
    expect(rectangleArea(['(0 0)', '(8 8)', '(0 8)', '(8 0)'])).toBe(64);
  });

  test('["(0 0)","(0 0)","(0 0)","(0 0)"] returns 0', () => {
    expect(rectangleArea(['(0 0)', '(0 0)', '(0 0)', '(0 0)'])).toBe(0);
  });

  test('["(0 0)","(5 0)","(0 3)","(5 3)"] returns 15', () => {
    expect(rectangleArea(['(0 0)', '(5 0)', '(0 3)', '(5 3)'])).toBe(15);
  });

  test('["(1 1)","(4 4)","(1 4)","(4 1)"] returns 9', () => {
    expect(rectangleArea( ['(1 1)', '(4 4)', '(1 4)', '(4 1)'])).toBe(9);
  });
});
