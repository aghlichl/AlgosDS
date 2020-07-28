var groupAnagrams = function (strs) {
  //initialize hash map for faster access of data
  let map = new Map();

  //iterate through strs and add to hash map
  for (let str of strs) {
    const s = uniform(str);
    let l = map.get(s) || [];
    l.push(str);
    map.set(s, l);
  }
  return Array.from(map.values());
};

//helper function used to rearrange and sort the strings alphabeticatally
var uniform = function (str) {
  return str.split("").sort().join("");
};
