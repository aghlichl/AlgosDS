var findRepeatedDnaSequences = function (s) {
  let start = 0;
  let end = 9;
  let res = [];
  duplicateMap = {};
  while (end < s.length) {
    let sub = s.substring(start, end + 1);
    duplicateMap[sub] = duplicateMap[sub] || 0;
    duplicateMap[sub]++;
    if (duplicateMap[sub] == 2) {
      res.push(sub);
    }

    start++;
    end++;
  }
  return res;
};

findRepeatedDnaSequences(input);
input = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
expect = ["AAAAACCCCC", "CCCCCAAAAA"];
