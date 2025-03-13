const { swapPairs } = require('./swapNodes')

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const createLinkedList = (arr) => {

    const head = new ListNode(arr[0]);
    let node = head;

    for (let i = 1; i < arr.length; i++) {
        node.next = new ListNode(arr[i])
        node = node.next;
    }

    return head

}

const testCases = [
    {
        input: [1, 2, 3, 4],
        output: [2, 1, 4, 3]
    },
    {
        input: [],
        output: []
    },
    {
        input: [1],
        output: [1]
    },
    {
        input: [1, 2, 3],
        output: [2, 1, 3]
    }
]


describe('swapPairs', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        const ll = createLinkedList(input)
        const result = createLinkedList(output)
        expect(swapPairs(ll)).toMatchObject(result)
    })
})
