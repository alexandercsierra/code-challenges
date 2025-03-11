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

// remove duplicates from a sorted linked list
function deleteDuplicates(head) {
    if (!head?.next) return head
    let node = head;
    let next = head.next;

    while (next) {
        if (node.val === next.val) {
            node.next = node.next.next;
            next.next = null;
            next = node.next;
        } else {
            node = next;
            next = node.next;
        }


    }
    return head
};

module.exports = { middleNode, deleteDuplicates }