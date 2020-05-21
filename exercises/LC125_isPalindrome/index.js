function isPalindrome(s) {
  let pal = s.toLowerCase().replace(/[\W_]/g, "");
  let left=0;
  let right = pal.length-1;
  while (left < right) {
    if (pal[left] != pal[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
