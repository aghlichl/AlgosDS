var maxSubArray = function (arr) {
  //initialize the lowest value as maxSum and arrlength and currSum
  let maxSum = -Infinity;
  let len = arr.length;
  let currSum;

  //loop through array and check for new max and set again if passed
  for (var i = 0; i < len; i++) {
    currSum = 0;
    for (var j = i; j < len; j++) {
      currSum += arr[j];
      if (maxSum < currSum) {
        maxSum = currSum;
      }
    }
  }

  //return highest sum at end of iteration
  return maxSum;
};
