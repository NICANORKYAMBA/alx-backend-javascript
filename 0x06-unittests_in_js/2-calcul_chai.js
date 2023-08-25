function calculateNumber (type, a, b) {
	const a_rounded = Math.round(a);
	const b_rounded = Math.round(b);

  if (type === 'SUM') {
    return a_rounded + b_rounded;
  } else if (type === 'SUBTRACT') {
    return a_rounded - b_rounded;
  } else if (type === 'DIVIDE') {
      return a_rounded / b_rounded;
  } else if (b_rounded === 0) {
	  return 'Error';
  } else {
	  return 'Error';
  }
}

module.exports = calculateNumber;
