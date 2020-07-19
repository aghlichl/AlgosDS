var isValid = function (s) {
  //if empty return true  
  if (s === null || s.length <= 0) return true;

  var cArr = s.split("");
  var stack = [];

  //loop through characters and push/pop from stack
  for (var c of cArr) {
    if (c === "[") stack.push("]");
    else if (c === "{") stack.push("}");
    else if (c === "(") stack.push(")");
    else if (stack.length === 0 || c !== stack.pop()) return false;
  }

  //check if stack is empty or has remaining parentheses
  if (stack.length === 0) return true;
  return false;
};
