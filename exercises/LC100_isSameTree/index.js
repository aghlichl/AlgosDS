var isSameTree = function (p, q) {
  //initialize conditional boolean
  let isEqual = true;
  //recursive function which traverses left and right of the tree
  function checkEquality(first, second) {
    if (first === null && second === null) {
      return;
    }
    if (first === null || second === null || first.val !== second.val) {
      isEqual = false;
      return;
    }
    checkEquality(first.left, second.left);
    checkEquality(first.right, second.right);
  }
  //run recursive function
  checkEquality(p, q);
  return isEqual;
};
