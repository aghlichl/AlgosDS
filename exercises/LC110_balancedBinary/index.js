var isBalanced = function (root) {
  //initialize the differetial in branches
  let maxDiff = 0;

  //recursive traversal function check node balance
  function getHeightDiff(node) {
    if (node == null) return 0;

    const leftHeight = getHeightDiff(node.left);
    const rightHeight = getHeightDiff(node.right);

    maxDiff = Math.max(maxDiff, Math.abs(leftHeight - rightHeight));

    return Math.max(leftHeight, rightHeight) + 1;
  }
  getHeightDiff(root);
  //return true if balanced
  return maxDiff <= 1;
};
