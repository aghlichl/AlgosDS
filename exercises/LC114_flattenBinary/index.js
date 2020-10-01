var flatten = function (root) {
  //initialize a previous pointer
  let prev = null;

  //recursive traversal helper function
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
  //recursive function call
  traverse(root);
};
