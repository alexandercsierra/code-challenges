// return the middle node of a linked list
// if there are two, return second node
function middleNode(head) {
    let slow = head;
    let fast = head;

    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next
    }

    return slow
};

module.exports = { middleNode }