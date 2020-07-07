var hasPathSum = function (root, sum) {
  if (!root && sum == 0) return false;
  let current = 0;
  let res = false;
  dfs(root, current, sum);
  function dfs(node, currSum, total) {
    if (!node || res) {
      return;
    }

    currSum += node.val;

    if (!node.left && !node.right && currSum == total) {
      res = true;
    }
    dfs(node.left, currSum, sum);
    dfs(node.right, currSum, sum);
  }
  return res;
}