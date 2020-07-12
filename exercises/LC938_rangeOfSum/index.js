var rangeSumBST = function (root, L, R) {
  let total = 0;
  function dfs(node) {
    if (!node) {
      return;
    }

    if (node.val >= L && node.val <= R) {
      total += node.val;
    }

    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return total;
};
