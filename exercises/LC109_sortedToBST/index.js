var sortedListToBST = function (head) {
  //initialize node count
  const numOfNodes = countNodes(head);
  //recursive traversal function
  function traverse(n) {
    //base case
    if (n <= 0) return null;

    const left = traverse(Math.floor(n / 2));
    const root = new TreeNode(head.val);
    root.left = left;
    head = head.next;
    root.right = traverse(n - Math.floor(n / 2) - 1);

    return root;
  }
  //count nodes function to check when empty
  function countNodes(node) {
    if (!node) return 0;
    return 1 + countNodes(node.next);
  }
  return traverse(numOfNodes);
};
