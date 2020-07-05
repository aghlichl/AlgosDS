var maxArea = function (height) {
  //     let subset = [];
  //     for(let i=0; i<height.length; i++){
  //         for(let j=0; j<height.length; j++){
  //             if(i!==j){
  //                 subset.push([i,j]);
  //             }
  //         }
  //     }

  //     let max_area=0;
  //     for(let i=0; i<subset.length; i++){
  //         let h = Math.min(height[subset[i][0]],height[subset[i][1]])
  //         let w = (Math.abs(subset[i][0]-subset[i][1]))
  //         if((h*w)>max_area){
  //             max_area = h*w;
  //         }
  //     }
  // return max_area
  let start = 0;
  let end = height.length - 1;
  let leftPoint = height[start];
  let rightPoint = height[end];
  let maxArea = Math.min(leftPoint, rightPoint) * (end - start);

  while (end > start) {
    leftPoint = height[start];
    rightPoint = height[end];
    console.log(maxArea);
    maxArea = Math.max(
      maxArea,
      Math.min(leftPoint, rightPoint) * (end - start)
    );
    if (height[end] > height[start]) {
      start++;
    } else {
      end--;
    }
  }

  return maxArea;
};

module.exports = maxArea;
