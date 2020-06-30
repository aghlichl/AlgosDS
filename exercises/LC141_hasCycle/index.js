function hasCycle(head) {
    //SLOW SOLUTION
    // let nodeList = []
    // while(head.next){
    //     if(nodeList.includes(head.next)){
    //         return true;
    //     }
    //     nodeList.push(head.next);
    //     head = head.next;
    // }
    // return false;

    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) return true;
    }
    return false;
}

module.exports = hasCycle;
