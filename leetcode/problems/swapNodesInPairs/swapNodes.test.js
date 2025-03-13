const { swapPairs } = require('./swapNodes')
const { createLinkedList } = require('../../utls/linkedLists')

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
