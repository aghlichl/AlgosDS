var lengthOfLastWord = function (s) {
  //initialize array of words
  let wordRay = s.split(" ");
  //loop in reverse to find last word that is not empty and return its length
  for (let i = s.length - 1; i >= 0; i--) {
    if (wordRay[i]) {
      return wordRay[i].length;
    }
  }
  //if empty return length of 0;
  return 0;
};
