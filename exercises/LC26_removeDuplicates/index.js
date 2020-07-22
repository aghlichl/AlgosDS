var removeDuplicates = function (nums) {
  let p1 = 0,
    lastVal = nums[0] - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != lastVal) {
      nums[p1] = nums[i];
      lastVal = nums[i];
      p1 += 1;
    }
  }
  nums.length = p1;
  console.log(nums);
};
