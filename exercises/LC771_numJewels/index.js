var numJewelsInStones = function (J, S) {
  let jewelCount = 0;
  let jewels = J.split();
  for (let i = 0; i < S.length; i++) {
    if (J.includes(S[i])) {
      jewelCount++;
    }
  }

  return jewelCount;
};
