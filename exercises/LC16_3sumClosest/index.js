var threeSumClosest = function (nums, target) {
    //base case less than 3 or emtpy
  if (nums.length < 3 || target == null) return;
  
  //initialize the target and sort the nums
  var res = target - nums[0] - nums[1] - nums[2],
    len = nums.length;

  nums.sort((a, b) => a - b);

    //loop through nums and check for triplets that work
  for (var i = 0; i < len - 2; i++) {
    var L = i + 1,
      R = len - 1;

    while (L < R) {
      var sum = nums[i] + nums[L] + nums[R];
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        while (nums[L] === nums[++L]);
      } else {
        while (nums[R] === nums[--R]);
      }

      if (Math.abs(target - sum) < Math.abs(res)) {
        res = target - sum;
      }
    }
  }

  return target - res;
};
