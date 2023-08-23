function calculateNumber(type, a, b) {
	if (type === 'SUM') {
		return Math.round(a) + Math.round(b);
	} else if (type === 'SUBTRACT') {
		return Math.round(a) - Math.round(b);
	} else if (type === 'DIVIDE') {
		a_rounded = Math.round(a);
		b_rounded = Math.round(b);

		if (b_rounded === 0) {
			return 'Error';
		} else {
			return a_rounded / b_rounded;
		}
	} else {
		return 'Error';
	}
}

module.exports = calculateNumber;
