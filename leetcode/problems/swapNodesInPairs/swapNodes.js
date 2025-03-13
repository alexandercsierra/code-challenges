// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/description/

function swapPairs(head) {
    let newHead = head?.next || head;
    let prevNode = null;
    let currNode = head;
    let nextNode = head?.next;

    // if there is only one node, return that
    if (!nextNode) return head;

    while (currNode && nextNode) {
        if (prevNode) {
            prevNode.next = nextNode;

        }

        const nextNext = nextNode.next;
        nextNode.next = currNode;
        currNode.next = nextNext;


        prevNode = currNode;
        currNode = nextNext;
        nextNode = nextNext?.next || null

    }

    return newHead;
};

module.exports = { swapPairs }