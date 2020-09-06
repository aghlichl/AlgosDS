function singleNumber(nums) {
  //initialize hash map for highest efficiency
  const map = {};

  //iterate through nums and increment key value 
  for (let n of nums) {
    if (map[n] == null) map[n] = 0;
    map[n]++;
  }

  //iterate through and return the single Number
  for (let n in map) {
    if (map[n] === 1) return Number(n);
  }
}
