// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

function compare(a, b) {
  if (a > b) return 1;
  if (b > a) return -1;

  return 0;
}

const canAttendMeetings = (intervals) => {
  let starts = [];
  let ends = [];
  let currInterval = [];

  for (let i = 0; i < intervals.length; i++) {
    currInterval = intervals[i];
    starts.push(currInterval[0]);
    ends.push(currInterval[1]);
  }

  starts.sort(compare);
  ends.sort(compare);
  for (let j = 0; j < starts.length - 1; j++) {
    if (starts[j + 1] < ends[j]) {
      return false;
    }
  }
  return true;
};

module.exports = canAttendMeetings;
