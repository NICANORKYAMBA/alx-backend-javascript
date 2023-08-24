// 4-payment.test.js
const sinon = require('sinon');
const assert = require('assert');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    // Create a stub for Utils.calculateNumber
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy to intercept console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy to their original states after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with type SUM, a = 100, and b = 20', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the expected arguments
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);
  });

  it('should log the correct message', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');
  });
});
