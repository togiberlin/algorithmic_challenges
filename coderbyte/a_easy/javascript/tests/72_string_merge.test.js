const stringMerge = require('../72_string_merge/string_merge.js');

describe('stringMerge', () => {
  test('abc1*kyoo returns akbyco1o', () => {
    expect(stringMerge('abc1*kyoo')).toBe('akbyco1o');
  });

  test('aaa*bbb returns ababab', () => {
    expect(stringMerge('aaa*bbb')).toBe('ababab');
  });

  test('123hg*aaabb returns 1a2a3ahbgb', () => {
    expect(stringMerge('123hg*aaabb')).toBe('1a2a3ahbgb');
  });

  test('a*a returns aa', () => {
    expect(stringMerge('a*a')).toBe('aa');
  });

  test('bbb*bbb^ returns bbbbbb', () => {
    expect(stringMerge('bbb*bbb^')).toBe('bbbbbb');
  });

  test('fmgk*a111 returns fam1g1k1', () => {
    expect(stringMerge('fmgk*a111')).toBe('fam1g1k1');
  });

  test('123*456 returns 142536', () => {
    expect(stringMerge('123*456')).toBe('142536');
  });

  test('kk*aa returns kaka', () => {
    expect(stringMerge('kk*aa')).toBe('kaka');
  });

  test('abcabc*abcdef returns aabbccadbecf', () => {
    expect(stringMerge('abcabc*abcdef')).toBe('aabbccadbecf');
  });

  test('aaaaaaaaaaa*uaaaaaaaaaa returns auaaaaaaaaaaaaaaaaaaaa', () => {
    expect(stringMerge('aaaaaaaaaaa*uaaaaaaaaaa'))
        .toBe('auaaaaaaaaaaaaaaaaaaaa');
  });
});
