var maxDepth = function (root) {
  let maxDepth = 0;
  let currDepth = 1;
  function dfs(node, currDepth) {
    if (!node) {
      maxDepth = Math.max(maxDepth, currDepth - 1);
      return;
    }
    dfs(node.left, currDepth + 1);
    dfs(node.right, currDepth + 1);
  }
  dfs(root, currDepth);
  return maxDepth;
};

module.exports = maxDepth;
