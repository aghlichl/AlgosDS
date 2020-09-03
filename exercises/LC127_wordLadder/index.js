var ladderLength = function (beginWord, endWord, wordList) {
  //base case for empty
  if (!wordList.includes(endWord)) return 0;
  

  const wordIn = new Array(wordList.length).fill(true);
  let q = [];
  q.push({ wrd: beginWord, level: 1 });

  //loop through with conditionals on differences
  while (q.length) {
    let curr = q.pop();
    if (curr.wrd === endWord) return curr.level;

    for (let i = 0; i < wordList.length; i++) {
      if (!wordIn[i]) continue;

      let charDiff = 0;
      for (let j = 0; j < wordList[i].length; j++) {
        if (wordList[i].charAt(j) !== curr.wrd.charAt(j)) charDiff += 1;
      }

      if (charDiff === 1) {
        q.unshift({ wrd: wordList[i], level: curr.level + 1 });
        wordIn[i] = false;
      }
    }
  }

  return 0;
};
