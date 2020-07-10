var binaryTreePaths = function (root) {
  let res = [];
  dfs(root, []);

  function dfs(node, currPath) {
    if (!node) {
      return;
    }
    if (currPath.empty) {
      currPath.push(node.val);
    } else {
      currPath.push(node.val);
    }

    if (!node.left && !node.right) {
      currPath = currPath.join("->");
      res.push(currPath);
    }

    dfs(node.left, currPath.slice());
    dfs(node.right, currPath.slice());
  }
  return res;
};
