class MinStack {
  //contruction intialization for varibales to keep track of
  constructor() {
    this.stack = [];
    this.min = Infinity;
  }
  //push method
  push(x) {
    const valMinPair = { val: x, prevMin: this.min };
    this.stack.push(valMinPair);
    this.min = Math.min(this.min, x);
  }
  //pop method
  pop() {
    const { val, prevMin } = this.stack.pop();
    this.min = prevMin;
    return val;
  }
  //show top value method
  top() {
    return this.stack[this.stack.length - 1].val;
  }
  //min method for returning lowest value
  getMin() {
    return this.min;
  }
}
