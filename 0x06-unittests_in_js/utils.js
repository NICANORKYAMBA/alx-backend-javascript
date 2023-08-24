const Utils = {
	calculateNumber: function (type, a, b) {
		if (type === 'SUM') {
			return Math.round(a) + Math.round(b);
		} else if (type === 'SUBTRACT') {
			return Math.round(a) - Math.round(b);
		} else if (type === 'DIVIDE') {
			const aRounded = Math.round(a);
			const bRounded = Math.round(b);

			if (bRounded === 0) {
				return 'Error';
			} else {
				return aRounded / bRounded;
			}
		} else {
			return 'Error';
		}
	}
};

module.exports = Utils;
