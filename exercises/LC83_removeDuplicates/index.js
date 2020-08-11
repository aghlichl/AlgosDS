var deleteDuplicates = function (head) {
  //base case if empty return the head
  if (!head) return head;
  //initialize current and nextnode variables
  var cur = head;
  //while loop for traversing through linked list
  while (cur.next != null) {
    var nextnode = cur.next;
    if (cur.val == nextnode.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
