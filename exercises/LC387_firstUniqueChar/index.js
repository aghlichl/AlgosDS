var firstUniqChar = function (s) {
  let hashMap = {};
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      hashMap[s[i]] += 1;
    } else {
      hashMap[s[i]] = 1;
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (hashMap[s[j]] == 1) {
      return j;
    }
  }
  return -1;
};
