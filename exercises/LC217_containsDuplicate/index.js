var containsDuplicate = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return true;
    }
    hash[nums[i]] = true;
  }
  return false;
};

module.exports = containsDuplicate;
