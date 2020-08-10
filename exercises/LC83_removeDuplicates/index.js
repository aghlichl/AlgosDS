var deleteDuplicates = function (head) {
  if (!head) return head;
  var cur = head;
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
