function calculateNumber (type, a, b) {
  const aRounded = Math.round(a);
  const bRounded = Math.round(b);

  if (type === 'SUM') {
    return aRounded + bRounded;
  } else if (type === 'SUBTRACT') {
    return aRounded - bRounded;
  } else if (type === 'DIVIDE') {
    return aRounded / bRounded;
  } else if (bRounded === 0) {
    return 'Error';
  } else {
    return 'Error';
  }
}

module.exports = calculateNumber;
