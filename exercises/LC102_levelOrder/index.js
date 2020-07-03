var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  function dfs(node, depthLevel) {
    let tempRay = [];
    if (!node) return;
    if (!res[depthLevel]) {
      res[depthLevel] = [];
    }

    res[depthLevel].push(node.val);
    dfs(node.left, depthLevel + 1);
    dfs(node.right, depthLevel + 1);
  }
  dfs(root, 0);
  return res;
};

module.exports = levelOrder;
