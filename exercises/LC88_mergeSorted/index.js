var merge = function (nums1, m, nums2, n) {
  //initialize the 3 indices to travese with;  
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  //while loop sorting conditionals
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i--];
    } else {
      nums1[k] = nums2[j--];
    }
    k--;
  }
  return nums1;
};
