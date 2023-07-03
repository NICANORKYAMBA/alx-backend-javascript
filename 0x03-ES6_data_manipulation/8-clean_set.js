function cleanSet(set, startString) {
  if (startString === '') return '';
  const resultArray = [];

  for (const item of set) {
    if (item.startsWith(startString)) {
      resultArray.push(item.substring(startString.length));
    }
  }
  return resultArray.join('-');
}

export default cleanSet;
