var isSameTree = function (p, q) {
  let isEqual = true;
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
  checkEquality(p, q);
  return isEqual;
};
