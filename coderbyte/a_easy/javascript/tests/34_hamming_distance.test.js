const hammingDistance = require('../34_hamming_distance/hamming_distance.js');

describe('hammingDistance', () => {
  test('["coder", "codec"] returns 1', () => {
    expect(hammingDistance(['coder', 'codec'])).toBe(1);
  });

  test('["10011", "10100"] returns 3', () => {
    expect(hammingDistance(['10011', '10100'])).toBe(3);
  });

  test('["helloworld", "worldhello"] returns 8', () => {
    expect(hammingDistance(['helloworld', 'worldhello'])).toBe(8);
  });

  test('["ba","ab"] returns 2', () => {
    expect(hammingDistance(['ba', 'ab'])).toBe(2);
  });

  test('["12","12"] returns 0', () => {
    expect(hammingDistance(['12', '12'])).toBe(0);
  });

  test('["abcd","efgh"] returns 4', () => {
    expect(hammingDistance(['abcd', 'efgh'])).toBe(4);
  });

  test('["karolin","kathrin"] returns 3', () => {
    expect(hammingDistance(['karolin', 'kathrin'])).toBe(3);
  });

  test('["1012","4512"] returns 2', () => {
    expect(hammingDistance(['1012', '4512'])).toBe(2);
  });

  test('["karolin","kerstin"] returns 3', () => {
    expect(hammingDistance(['karolin', 'kerstin'])).toBe(3);
  });

  test('["ab10kl","ab22ko"] returns 3', () => {
    expect(hammingDistance(['ab10kl', 'ab22ko'])).toBe(3);
  });
});
