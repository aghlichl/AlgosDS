var romanToInt = function (s) {
  let dict = {};
  dict["I"] = 1;
  dict["V"] = 5;
  dict["X"] = 10;
  dict["L"] = 50;
  dict["C"] = 100;
  dict["D"] = 500;
  dict["M"] = 1000;

  if (s.length === 0) {
    return 0;
  }

  let total = dict[s[0]];

  for (let i = 1; i < s.length; i++) {
    if (dict[s[i - 1]] < dict[s[i]]) {
      total -= dict[s[i - 1]] * 2;
    }
    total += dict[s[i]];
  }
  return total;
};
