// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     let result = [];
//     let seen = []
//     for(let x=0; x<nums.length; x++){
//         for(let y=0; y<nums.length; y++){
//             for(let z=0; z<nums.length; z++){
//                 if(checker(seen,nums,x,y,z)){
//                     result.push([nums[x],nums[y],nums[z]]);
//                      seen.push([x,y,z]);
//                      seen.push([x,z,y]);
//                      seen.push([y,z,x]);
//                      seen.push([z,y,x]);
//                      seen.push([y,x,z]);
//                      seen.push([z,x,y]);
//                 }
//                 }
//             }
//         }
//         return result;
//     };

// var checker = function(seen,nums,x,y,z){
//     console.log(seen)
//     let summer = (nums[x] + nums[y] + nums[z])
//     if(x!==y && y!==z && z!==x && summer===0){
//         if(seen.includes([x,y,z])){
//            return false;
//            }
//         else{
//             return true;
//         }
//     }
//     return false;
// }


var threeSum = function (nums) {
  var solutions = [];
  var target = 0;
  nums.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      var lo = i + 1;
      var hi = nums.length - 1;
      var sum = -nums[i];
      while (lo < hi) {
        if (nums[lo] + nums[hi] === sum) {
          solutions.push([nums[i], nums[lo], nums[hi]]);
          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
          while (lo < hi && nums[hi] == nums[hi - 1]) hi--;
          lo++;
          hi--;
        } else if (nums[lo] + nums[hi] > sum) {
          hi--;
        } else {
          lo++;
        }
      }
    }
  }
  return solutions;
};

