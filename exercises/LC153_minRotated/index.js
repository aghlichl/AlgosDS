var findMin = function (nums) {
  if (nums.length == 1) return nums[0];
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let current = nums[mid];
    if (nums[mid - 1] > current) {
      return current;
    } else if (nums[0] < current) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return Math.min(nums[0], nums[1]);

};
console.log(findMin([5, 1,2,3,4]));

//How to find min?
// if(current-1 > current) -> Found min
//
// mid-start vs end-mid
// 34512
// 9  1  2  3  4  5  6  7  8
// current is 7
//  4 left most
//  3 right most
//
// If current > left most, still in the increasing part (before the rotation)
//-> Go right
// If first element and middle element in order
// -> GO right
// else go left
