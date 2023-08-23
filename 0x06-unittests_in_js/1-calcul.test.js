const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber() with SUM', () => {
	it('add 0.5 and 5', () => {
		assert.equal(calculateNumber('SUM', 0.5, 5), 6);
	});
	it('add 7.4 and 3', () => {
		assert.equal(calculateNumber('SUM', 7.4, 3), 10);
	});
	it('add -2.7 and 18', () => {
		assert.equal(calculateNumber('SUM', -2.7, 18), 15);
	});
	it('add -6.3 and 6', () => {
		assert.equal(calculateNumber('SUM', -6.3, 6), 0);
	});
	it('add -6.3 and -6.3', () => {
		assert.equal(calculateNumber('SUM', -6.3, -6.3), -12);
	});
	it('add 18 and -2.7', () => {
		assert.equal(calculateNumber('SUM', 18, -2.7), 15);
	});
	it('add 6 and -6.3', () => {
		assert.equal(calculateNumber('SUM', 6, -6.3), 0);
	});
	it('add 5 and 0.5', () => {
		assert.equal(calculateNumber('SUM', 5, 0.5), 6);
	});
	it('add 3 and 7.4', () => {
		assert.equal(calculateNumber('SUM', 3, 7.4), 10);
	});
	it('add -5 and -9.7', () => {
		assert.equal(calculateNumber('SUM', -5, -9.7), -15);
	});
});

describe('calculateNumber() with SUBTRACT', () => {
	it('subtract 0.5 and 5', () => {
		assert.equal(calculateNumber('SUBTRACT', 0.5, 5), -4);
	});
	it('subtract 7.4 and 3', () => {
		assert.equal(calculateNumber('SUBTRACT', 7.4, 3), 4);
	});
	it('subtract -2.7 and 18', () => {
		assert.equal(calculateNumber('SUBTRACT', -2.7, 18), -21);
	});
	it('subtract -6.3 and 6', () => {
		assert.equal(calculateNumber('SUBTRACT', -6.3, 6), -12);
	});
	it('subtract -6.3 and -6.3', () => {
		assert.equal(calculateNumber('SUBTRACT', -6.3, -6.3), 0);
	});
	it('subtract 18 and -2.7', () => {
		assert.equal(calculateNumber('SUBTRACT', 18, -2.7), 21);
	});
	it('subtract 6 and -6.3', () => {
		assert.equal(calculateNumber('SUBTRACT', 6, -6.3), 12);
	});
	it('subtract 5 and 0.5', () => {
		assert.equal(calculateNumber('SUBTRACT', 5, 0.5), 4);
	});
	it('subtract 3 and 7.4', () => {
		assert.equal(calculateNumber('SUBTRACT', 3, 7.4), -4);
	});
	it('subtract -5 and -9.7', () => {
		assert.equal(calculateNumber('SUBTRACT', -5, -9.7), 5);
	});
});

describe('calculateNumber() with DIVIDE', () => {
	it('divide 0.5 and 5', () => {
		assert.equal(calculateNumber('DIVIDE', 0.5, 5), 0.2);
	});
	it('divide 7.4 and 3', () => {
		assert.equal(calculateNumber('DIVIDE', 6.4, 3), 2);
	});
	it('divide -2.7 and 18', () => {
		assert.equal(calculateNumber('DIVIDE', -2.7, 3.4), -1);
	});
	it('divide -6.3 and 6', () => {
		assert.equal(calculateNumber('DIVIDE', -6.3, 6), -1);
	});
	it('divide -6.3 and -6.3', () => {
		assert.equal(calculateNumber('DIVIDE', -6.3, -6.3), 1);
	});
	it('divide 18 and -2.7', () => {
		assert.equal(calculateNumber('DIVIDE', 18, -2.7), -6);
	});
	it('divide 6 and -6.3', () => {
		assert.equal(calculateNumber('DIVIDE', 6, -6.3), -1);
	});
	it('divide 5 and 0.5', () => {
		assert.equal(calculateNumber('DIVIDE', 5, 0.5), 5);
	});
	it('divide 3 and 7.4', () => {
		assert.equal(calculateNumber('DIVIDE', 3, 7.4), 0.42857142857142855);
	});
	it('divide -5 and -9.7', () => {
		assert.equal(calculateNumber('DIVIDE', -5, -9.7), 0.5);
	});
	it('divide 5 and 0', () => {
		assert.equal(calculateNumber('DIVIDE', 5, 0), 'Error');
	});
	it('divide 0 and 5', () => {
		assert.equal(calculateNumber('DIVIDE', 0, 5), 0);
	});
	it('divide 0 and 0', () => {
		assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
	});
	it('divide -9.4 and -0.3', () => {
		assert.equal(calculateNumber('DIVIDE', -9.4, -0.3), 'Error');
	});
});

describe('calculateNumber() with an Unknown Operation', () => {
	it('multiply 5 and 0', () => {
		assert.equal(calculateNumber('MULTIPLY', 5, 0), 'Error');
	});
	it('add 0 and 5', () => {
		assert.equal(calculateNumber('add', 0, 5), 'Error');
	});
	it('subtract 45 and 5', () => {
		assert.equal(calculateNumber('subtract', 0, 0), 'Error');
	});
	it('divide 0 and 0', () => {
		assert.equal(calculateNumber('divide', 0, 0), 'Error');
	});
	it('randomoperation -9.4 and -0.3', () => {
		assert.equal(calculateNumber('randomoperation', -9.4, -0.3), 'Error');
	});
});
