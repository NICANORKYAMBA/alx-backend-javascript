const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
  let calledFunction;

  beforeEach(() => {
    if (!calledFunction) {
      calledFunction = sinon.spy(console);
    }
  });

  afterEach(() => {
    calledFunction.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calledFunction.log.calledWith('The total is: 120')).to.be.true;
    expect(calledFunction.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(calledFunction.log.calledWith('The total is: 20')).to.be.true;
    expect(calledFunction.log.calledOnce).to.be.true;
  });
});
