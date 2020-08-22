const singleNumber = function (nums) {
  //initialize map for more efficiency
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      const nextCount = map.get(num) + 1;
      if (nextCount === 3) {
        map.delete(num);
      } else {
        map.set(num, nextCount);
      }
    } else {
      map.set(num, 1);
    }
  }
  //return key that fits the value
  return map.keys().next().value;
};
