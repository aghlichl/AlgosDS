var getIntersectionNode = function (headA, headB) {
  
  if (!headA || !headB) {
    return null;
  }

  let curA = headA;
  let curB = headB;

  while (curA !== curB) {
    if (curA.next) {
      curA = curA.next;
    } else {
      if (!curB.next) {
        curA = null;
        curB = null;
        break;
      }
      curA = headB;
    }

    if (curB.next) {
      curB = curB.next;
    } else {
      curB = headA;
    }
  }

  return curB;
};
