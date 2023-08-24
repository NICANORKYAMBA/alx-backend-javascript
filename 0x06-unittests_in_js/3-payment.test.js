const sinon = require('sinon');
const assert = require('assert');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi()', () => {
  it('should call Utils.calculateNumber with type SUM', () => {
    const SendPaymentRequestToApispy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWithExactly(SendPaymentRequestToApispy, 'SUM', 100, 20);

    SendPaymentRequestToApispy.restore();
  });

  it('should log the correct message', () => {
    const logSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWithExactly(logSpy, 'The total is: 120');

    logSpy.restore();
  });
});
