function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }

  const resultArray = Array.from(set)
    .filter((item) => (item !== undefined ? item.startsWith(startString) : ''))
    .map((item) => (item !== undefined ? item.substring(startString.length) : ''));

  return resultArray.join('-');
}

export default cleanSet;
