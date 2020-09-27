var sortedListToBST = function (head) {
  const numOfNodes = countNodes(head);
  function traverse(n) {
    if (n <= 0) return null;

    const left = traverse(Math.floor(n / 2));
    const root = new TreeNode(head.val);
    root.left = left;
    head = head.next;
    root.right = traverse(n - Math.floor(n / 2) - 1);

    return root;
  }
  function countNodes(node) {
    if (!node) return 0;
    return 1 + countNodes(node.next);
  }
  return traverse(numOfNodes);
};
