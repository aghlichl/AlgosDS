var merge = function (intervals) {
  if (!intervals.length) {
    return [];
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [];
  let currEnd = intervals[0][1];
  let currStart = intervals[0][0];
  let currIdx = 1;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= currEnd) {
      if (intervals[i][1] > currEnd) {
        currEnd = intervals[i][1];
      }
    } else {
      merged.push([currStart, currEnd]);
      currStart = intervals[i][0];
      currEnd = intervals[i][1];
    }
    console.log(currStart, currEnd);
  }

  merged.push([currStart, currEnd]);
  return merged;
};

module.exports = merge;
