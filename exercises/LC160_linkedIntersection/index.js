var getIntersectionNode = function (headA, headB) {
  //base case for edge case parameters
  if (!headA || !headB) {
    return null;
  }
  // current nodes
  let curA = headA;
  let curB = headB;

  // our end check. this works because we switch track to sync up
  while (curA !== curB) {
    if (curA.next) {
      // regular follow the path
      curA = curA.next;
    } else {
      if (!curB.next) {
        // if curB also reaches null next, we've ended up at the end without
        // any match found. break out of the loop and return null now.
        curA = null;
        curB = null;
        break;
      }
      // switch tracks to even out uneven length
      curA = headB;
    }

    if (curB.next) {
      // regular follow the path
      curB = curB.next;
    } else {
      // switch tracks to even out uneven length
      curB = headA;
    }
  }

  return curB;
};
