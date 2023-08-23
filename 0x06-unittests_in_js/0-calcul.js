/**
 * function calculateNumber -> calculates the sum of two numbers
 * @param {number} a
 * @param {number} b
 * @return {number}
 * @example
 * calculateNumber(1, 2); // 3
 * calculateNumber(0.5, 0.5); // 2
 */
function calculateNumber (a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
