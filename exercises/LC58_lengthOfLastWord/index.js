var lengthOfLastWord = function (s) {
  let wordRay = s.split(" ");
  for (let i = s.length - 1; i >= 0; i--) {
    if (wordRay[i]) {
      return wordRay[i].length;
    }
  }
  return 0;
};
