var merge = function (nums1, m, nums2, n) {
 //initialize first and second pointers
  var first = m - 1;
  var second = n - 1;

  //loop through array and run through conditionals
  for (var i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }
};
