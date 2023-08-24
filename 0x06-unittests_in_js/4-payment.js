const Utils = require('./utils.js');

function sendPaymentRequestToApi (totalAmount, totalShipping) {
  const payment = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${payment}`);
}

module.exports = sendPaymentRequestToApi;
