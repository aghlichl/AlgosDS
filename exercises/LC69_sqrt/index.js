let mySqrt = function (num) {
  //base case for numbers smaller than 2
  if (num < 2) {
    return num;
  }
  //using a two pointer approach to return the square root
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
  //return solution
  return left - 1;
};
