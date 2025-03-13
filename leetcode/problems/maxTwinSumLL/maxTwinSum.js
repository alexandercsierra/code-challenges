const maxTwinSum = (head) => {

    if (head.next === null) return head.val;
    if (head.next.next === null) return head.val + head.next.val;

    // initialize two pointers, one moving twice as fast as the other;
    let slow = head;
    let fast = head;

    while (fast) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // now fast is null, so slow is the middle node;
    // reverse the list starting with the middle node;
    let prev = null;
    let curr = slow;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // prev now represents the head of the reversed list
    let reversedHead = prev;
    let maxSum = -1;
    while (reversedHead) {
        maxSum = Math.max(maxSum, head.val + reversedHead.val);
        reversedHead = reversedHead.next
        head = head.next
    }

    return maxSum


}


module.exports = { maxTwinSum }