function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b);

  var length = candidates.length;
  var res = [];
  search(0, [], target);
  return res;

  function search(idx, prefix, target) {
    if (target === 0) res.push(prefix.slice());
    if (idx === length) return;
    if (target <= 0) return;

    prefix.push(candidates[idx]);
    search(idx, prefix, target - candidates[idx]);
    prefix.pop();
    search(idx + 1, prefix, target);
  }
};
