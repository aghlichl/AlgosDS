var rightSideView = function (root) {
  let res = [];
  function dfsRight(node, depth) {
    if (!node) {
      return;
    }
    if (!res[depth]) {
      res[depth] = node.val;
    }
    dfsRight(node.right, depth + 1);
    dfsRight(node.left, depth + 1);
  }

  dfsRight(root, 0);

  return res;
};
