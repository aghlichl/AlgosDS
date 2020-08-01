var maxSubArray = function (arr) {
  let maxSum = -Infinity;
  let len = arr.length;
  let currSum;
  for (var i = 0; i < len; i++) {
    currSum = 0;
    for (var j = i; j < len; j++) {
      currSum += arr[j];
      if (maxSum < currSum) {
        maxSum = currSum;
      }
    }
  }
  return maxSum;
};
