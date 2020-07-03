var invertTree = function (root) {
  function dfs(node) {
    if (!node) {
      return;
    }
    temp = node.left;
    node.left = node.right;
    node.right = temp;
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return root;
};

module.exports = invertTree;
