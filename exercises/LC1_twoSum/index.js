var twoSum = function (nums, target) {
  let compliment = {};
  for (let i = 0; i < nums.length; i++) {
    let hashTarget = target - nums[i];
    if (compliment[hashTarget] || compliment[hashTarget] == 0) {
      return [compliment[hashTarget], i];
    }
    compliment[nums[i]] = i;
  }
  return [];
};
