var maxProduct = function (nums) {
  //initialize max, currmin and max varibales
  let max = -Infinity;
  let currentMax = 1;
  let currentMin = 1;

  //loop through and check for min and max changes needed to be made
  for (let i = 0; i < nums.length; i++) {
    let prevMax = currentMax;
    currentMax = Math.max(nums[i], prevMax * nums[i], currentMin * nums[i]);
    currentMin = Math.min(nums[i], prevMax * nums[i], currentMin * nums[i]);
    max = Math.max(currentMax, max);
  }

  //return max
  return max;
};
