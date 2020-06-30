const reverseList = head => {
    let prev = null;
    let curr = head;
    while (curr) {
      let temp = curr.next;

      //change direction
      curr.next = prev;

      //Move prev and current up by 1
      prev = curr;
      curr = temp;
    }
    return prev; 
};

module.exports = reverseList;
