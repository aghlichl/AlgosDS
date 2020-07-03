var productExceptSelf = function (nums) {
  let output = nums.map((n) => 1);

  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] *= product;
    product *= nums[i];
  }

  product = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] *= product;
    product *= nums[j];
  }

  return output;
};

module.exports = productExceptSelf;
