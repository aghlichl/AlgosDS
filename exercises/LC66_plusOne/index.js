var plusOne = function (digits) {
  let end = digits.length - 1;
  while (end >= 0) {
    if (digits[end] == 9) {
      digits[end] = 0;
      end--;
    } else {
      digits[end]++;
      return digits;
    }
  }
  if (digits[0] == 0) {
    digits.unshift(1);
  }
  return digits;
};
