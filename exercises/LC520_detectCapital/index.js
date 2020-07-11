var detectCapitalUse = function (word) {
  let capCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      capCount++;
    }
  }

  if (
    capCount === word.length ||
    capCount == 0 ||
    (word[0] === word[0].toUpperCase() && capCount == 1)
  ) {
    return true;
  } else {
    return false;
  }
};
