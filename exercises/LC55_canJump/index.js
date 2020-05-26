function canJump(nums) {
  if (nums.length === 1) return true;
  if (nums[0] === 0) return false;
  let jumpRequired = 0;
  if (nums[nums.length - 1] !== 0) {
    jumpRequired = 1;
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < jumpRequired) {
      jumpRequired++;
    } else {
      jumpRequired = 1;
    }
  }
  return jumpRequired === 1;
}

module.exports = canJump;
