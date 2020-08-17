var subsets = function (nums) {
  var array = [[]];
  combine([], nums.slice(0), array);
  return array;
};

function combine(arr, nums, array) {
  while (nums.length) {
    var data = nums[0];
    var currArr = arr.slice(0);
    currArr.push(data);
    array.push(currArr);
    nums.shift();
    combine(currArr, nums.slice(0), array);
  }
}
