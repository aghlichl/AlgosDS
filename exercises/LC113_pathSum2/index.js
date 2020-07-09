var pathSum = function (root, sum) {
  let validPathes = [];
  let initialPath = [];
  helper(root, initialPath, 0);
  function helper(node, currPath, currSum) {
    if (!node) {
      return;
    }
    currPath.push(node.val);
    currSum += node.val;
    console.log(currSum);
    if (!node.left && !node.right && currSum == sum) {
      validPathes.push(currPath);
      currPath = [];
      currSum = 0;
    }
    helper(node.left, currPath.slice(), currSum);
    helper(node.right, currPath.slice(), currSum);
  }
  return validPathes;
};
