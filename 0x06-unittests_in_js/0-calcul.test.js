const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('rounding of a', () => {
    assert.equal(calculateNumber(14.69, 3), 18);
    assert.equal(calculateNumber(9.3, 0), 9);
    assert.equal(calculateNumber(4.5, 5), 10);
    assert.equal(calculateNumber(-4.4, 5), 1);
    assert.equal(calculateNumber(-9.7, 0), -10);
  });

  it('rounding of b', () => {
    assert.equal(calculateNumber(3, 14.69), 18);
    assert.equal(calculateNumber(0, 9.3), 9);
    assert.equal(calculateNumber(5, 4.5), 10);
    assert.equal(calculateNumber(0, -4.4), -4);
    assert.equal(calculateNumber(0, -9.7), -10);
  });

  it('suming of a and b', () => {
    assert.equal(calculateNumber(14.69, 3.5), 19);
    assert.equal(calculateNumber(9.3, 0.5), 10);
    assert.equal(calculateNumber(4.5, 5.7), 11);
    assert.equal(calculateNumber(-4.4, -5.7), -10);
    assert.equal(calculateNumber(-9.7, -0.5), -10);
  });
});
