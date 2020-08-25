var flatten = function (root) {
  //initilaize a previous pointer as null to keep track
  let prev = null;

  //recursive travesal function
  const traverse = (node) => {
    //base case to break traversal and return solution
    if (node === null) {
      return;
    }
    traverse(node.right);
    traverse(node.left);
    //remove left pointer and continue to attach to the right
    node.left = null;
    node.right = prev;
    prev = node;
  };

  traverse(root);
};
