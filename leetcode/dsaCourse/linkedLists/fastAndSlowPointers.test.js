const { middleNode, deleteDuplicates } = require('./fastAndSlowPointers')

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

const testCasesMiddle = [
    {
        input: [1, 2, 3, 4, 5],
        output: [3, 4, 5]
    },
    {
        input: [1, 2, 3, 4, 5, 6],
        output: [4, 5, 6]
    }
]

const testCasesDupes = [
    {
        input: [1, 1, 2],
        output: [1, 2]
    },
    {
        input: [1, 1, 2, 3, 3],
        output: [1, 2, 3]
    },
    {
        input: [],
        output: []
    }
]

describe('middleNode', () => {
    test.each(testCasesMiddle)('$input => $output', ({ input, output }) => {
        const ll = createLinkedList(input)
        const result = createLinkedList(output)
        expect(middleNode(ll)).toMatchObject(result)
    })
})
describe('deleteDuplicates', () => {
    test.each(testCasesDupes)('$input => $output', ({ input, output }) => {
        const ll = createLinkedList(input)
        const result = createLinkedList(output)
        expect(deleteDuplicates(ll)).toMatchObject(result)
    })
})