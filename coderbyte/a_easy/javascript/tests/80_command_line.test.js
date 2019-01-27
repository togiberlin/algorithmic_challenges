const commandLine = require('../80_command_line/command_line.js');

describe('commandLine', () => {
  test(`SampleNumber=3234 provider=Dr. M. Welby patient=John Smith
    priority=High returns 12=4 8=12 7=10 8=4`, () => {
    expect(
        commandLine('SampleNumber=3234 provider=Dr. M. Welby patient=John Smith'
            + ' priority=High')
    )
        .toBe('12=4 8=12 7=10 8=4');
  });

  test(`letters=A B Z T numbers=1 2 26 20 combine=true
    returns 7=7 7=9 7=4`, () => {
    expect(commandLine('letters=A B Z T numbers=1 2 26 20 combine=true'))
        .toBe('7=7 7=9 7=4');
  });

  test('a=3 b=4 a=23 b=a 4 23 c= returns 1=1 1=1 1=2 1=6 1=0', () => {
    expect(commandLine('a=3 b=4 a=23 b=a 4 23 c=')).toBe('1=1 1=1 1=2 1=6 1=0');
  });

  test(`origin=2;3 destination=7;9 stops= 3;6 8;9 12;17
    returns 6=3 11=3 5=14`, () => {
    expect(commandLine('origin=2;3 destination=7;9 stops= 3;6 8;9 12;17'))
        .toBe('6=3 11=3 5=14');
  });

  test('BNF=number :: (0..9){0..9}; variable :: {A..Z} returns 3=42', () => {
    expect(commandLine('BNF=number :: (0..9){0..9}; variable :: {A..Z}'))
        .toBe('3=42');
  });

  test.skip('Options= operation=ADD priority= returns 7=0 9=3 8=0', () => {
    expect(commandLine('Options= operation=ADD priority=')).toBe('7=0 9=3 8=0');
  });

  test('name=A value= 3 name=B value=8 returns 4=1 5=2 4=1 5=1', () => {
    expect(commandLine('name=A value= 3 name=B value=8'))
        .toBe('4=1 5=2 4=1 5=1');
  });

  test('empty= returns 5=0', () => {
    expect(commandLine('empty=')).toBe('5=0');
  });

  test('dir=c: returns 3=2', () => {
    expect(commandLine('dir=c:')).toBe('3=2');
  });

  test(`code=3320 date=2017/09/19 value=42 name=H G T T G
    returns 4=4 4=10 5=2 4=9`, () => {
    expect(commandLine('code=3320 date=2017/09/19 value=42 name=H G T T G'))
        .toBe('4=4 4=10 5=2 4=9');
  });
});
