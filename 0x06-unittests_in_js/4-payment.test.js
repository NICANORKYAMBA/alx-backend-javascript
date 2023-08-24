const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should call console.log with the right arguments', () => {
    // Create a stub for Utils.calculateNumber
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy to intercept console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    // Assert that Utils.calculateNumber was called only once
    expect(calculateNumberStub.callCount).to.equal(1);

    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    // Assert that console.log was called only once
    expect(consoleLogSpy.callCount).to.equal(1);

    // Restore the stub and spy to their original states after the test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
