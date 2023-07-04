function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quality] of map) {
    if (quality === 1) {
      map.set(item, 100);
    }
  }
}

export default updateUniqueItems;
