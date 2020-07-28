var groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    const s = uniform(str);
    let l = map.get(s) || [];
    l.push(str);
    map.set(s, l);
  }
  return Array.from(map.values());
};

var uniform = function (str) {
  return str.split("").sort().join("");
};
