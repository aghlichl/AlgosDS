let mySqrt = function (num) {
  if (num < 2) {
    return num;
  }

  let left = 1;
  let right = num;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid * mid === num) {
      return mid;
    } else if (mid * mid > num) {
      right = mid;
    } else if (mid * mid < num) {
      left = mid + 1;
    }
  }

  return left - 1;
};
