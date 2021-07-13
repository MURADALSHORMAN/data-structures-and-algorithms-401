let bracket = require('../JavaScript/stack-queue-brackets');

describe(' Brackets test', () => {
  it('should return true', () => {
    expect(bracket('()[[Extra Characters]]')).toBeTruthy();
    expect(bracket('{}')).toBeTruthy();
    expect(bracket('{([])}')).toBeTruthy();
    expect(bracket('{}{Code}[Fellows](())')).toBeTruthy();
  });

  it('should return false', () => {
    expect(bracket('[({}]')).toBeFalsy();
    expect(bracket('(](')).toBeFalsy();
    expect(bracket('{(})')).toBeFalsy();
  });

  it('should return false', () => {
    expect(bracket(1234)).toBeFalsy();
    expect(bracket(true)).toBeFalsy();
    expect(bracket([])).toBeFalsy();
  });

});