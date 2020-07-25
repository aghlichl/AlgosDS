const permute = (nums) => {
  let result = [];
  const p = (arr, tempArray = []) => {
    if (arr.length === 0) {
      result.push(tempArray);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        p(curr.slice(), tempArray.concat(next));
      }
    }
  };
  p(nums);
  return result;
};
