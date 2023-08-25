const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber() with SUM', () => {
  it('add 0.5 and 5', () => {
    expect(calculateNumber('SUM', 0.5, 5)).to.equal(6);
  });
  it('add 7.4 and 3', () => {
    expect(calculateNumber('SUM', 7.4, 3)).to.equal(10);
  });
  it('add -2.7 and 18', () => {
    expect(calculateNumber('SUM', -2.7, 18)).to.equal(15);
  });
  it('add -6.3 and 6', () => {
    expect(calculateNumber('SUM', -6.3, 6)).to.equal(0);
  });
  it('add -6.3 and -6.3', () => {
    expect(calculateNumber('SUM', -6.3, -6.3)).to.equal(-12);
  });
  it('add 18 and -2.7', () => {
    expect(calculateNumber('SUM', 18, -2.7)).to.equal(15);
  });
  it('add 6 and -6.3', () => {
    expect(calculateNumber('SUM', 6, -6.3)).to.equal(0);
  });
  it('add 5 and 0.5', () => {
    expect(calculateNumber('SUM', 5, 0.5)).to.equal(6);
  });
  it('add 3 and 7.4', () => {
    expect(calculateNumber('SUM', 3, 7.4)).to.equal(10);
  });
  it('add -5 and -9.7', () => {
    expect(calculateNumber('SUM', -5, -9.7)).to.equal(-15);
  });
});

describe('calculateNumber() with SUBTRACT', () => {
  it('subtract 0.5 and 5', () => {
    expect(calculateNumber('SUBTRACT', 0.5, 5)).to.equal(-4);
  });
  it('subtract 7.4 and 3', () => {
    expect(calculateNumber('SUBTRACT', 7.4, 3)).to.equal(4);
  });
  it('subtract -2.7 and 18', () => {
    expect(calculateNumber('SUBTRACT', -2.7, 18)).to.equal(-21);
  });
  it('subtract -6.3 and 6', () => {
    expect(calculateNumber('SUBTRACT', -6.3, 6)).to.equal(-12);
  });
  it('subtract -6.3 and -6.3', () => {
    expect(calculateNumber('SUBTRACT', -6.3, -6.3)).to.equal(0);
  });
  it('subtract 18 and -2.7', () => {
    expect(calculateNumber('SUBTRACT', 18, -2.7)).to.equal(21);
  });
  it('subtract 6 and -6.3', () => {
    expect(calculateNumber('SUBTRACT', 6, -6.3)).to.equal(12);
  });
  it('subtract 5 and 0.5', () => {
    expect(calculateNumber('SUBTRACT', 5, 0.5)).to.equal(4);
  });
  it('subtract 3 and 7.4', () => {
    expect(calculateNumber('SUBTRACT', 3, 7.4)).to.equal(-4);
  });
  it('subtract -5 and -9.7', () => {
    expect(calculateNumber('SUBTRACT', -5, -9.7)).to.equal(5);
  });
});

describe('calculateNumber() with DIVIDE', () => {
  it('divide 0.5 and 5', () => {
    expect(calculateNumber('DIVIDE', 0.5, 5)).to.equal(0.2);
  });
  it('divide 7.4 and 3', () => {
    expect(calculateNumber('DIVIDE', 6.4, 3)).to.equal(2);
  });
  it('divide -2.7 and 18', () => {
    expect(calculateNumber('DIVIDE', -2.7, 3.4)).to.equal(-1);
  });
  it('divide -6.3 and 6', () => {
    expect(calculateNumber('DIVIDE', -6.3, 6)).to.equal(-1);
  });
  it('divide -6.3 and -6.3', () => {
    expect(calculateNumber('DIVIDE', -6.3, -6.3)).to.equal(1);
  });
  it('divide 18 and -2.7', () => {
    expect(calculateNumber('DIVIDE', 18, -2.7)).to.equal(-6);
  });
  it('divide 6 and -6.3', () => {
    expect(calculateNumber('DIVIDE', 6, -6.3)).to.equal(-1);
  });
  it('divide 5 and 0.5', () => {
    expect(calculateNumber('DIVIDE', 5, 0.5)).to.equal(5);
  });
  it('divide 3 and 7.4', () => {
    expect(calculateNumber('DIVIDE', 3, 7.4)).to.equal(0.42857142857142855);
  });
  it('divide -5 and -9.7', () => {
    expect(calculateNumber('DIVIDE', -5, -9.7)).to.equal(0.5);
  });
  it('divide 5 and 0', () => {
    expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
  });
  it('divide 0 and 5', () => {
    expect(calculateNumber('DIVIDE', 0, 5)).to.equal(0);
  });
  it('divide 0 and 0', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });
  it('divide -9.4 and -0.3', () => {
    expect(calculateNumber('DIVIDE', -9.4, -0.3)).to.equal('Error');
  });
});
