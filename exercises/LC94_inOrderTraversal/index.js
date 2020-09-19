var inorderTraversal = function (root) {
  //initialize result array
  const result = [];

  //helper function DFS recursively
  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  //run recursive helper
  traverse(root);
  return result;
};
