var isBalanced = function (root) {
  let maxDiff = 0;

  getHeightDiff(root);

  return maxDiff <= 1;

  function getHeightDiff(node) {
    if (node == null) return 0;

    const leftHeight = getHeightDiff(node.left);
    const rightHeight = getHeightDiff(node.right);

    maxDiff = Math.max(maxDiff, Math.abs(leftHeight - rightHeight));

    return Math.max(leftHeight, rightHeight) + 1;
  }
};
