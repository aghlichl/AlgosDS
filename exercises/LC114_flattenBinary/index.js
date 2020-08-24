var flatten = function (root) {
  let prev = null;
  const traverse = (node) => {
    if (node === null) {
      return;
    }
    traverse(node.right);
    traverse(node.left);
    node.left = null;
    node.right = prev;
    prev = node;
  };

  traverse(root);
};
