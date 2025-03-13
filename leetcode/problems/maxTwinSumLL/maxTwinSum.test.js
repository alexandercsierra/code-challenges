const { maxTwinSum } = require('./maxTwinSum')
const { createLinkedList } = require('../../utls/linkedLists')


const testCases = [
    {
        input: [5, 4, 2, 1],
        output: 6
    },
    {
        input: [4, 2, 2, 3],
        output: 7
    },
    {
        input: [1, 100000],
        output: 100001
    },
    {
        input: [47, 22, 81, 46, 94, 95, 90, 22, 55, 91, 6, 83, 49, 65, 10, 32,
            41, 26, 83, 99, 14, 85, 42, 99, 89, 69, 30, 92, 32, 74, 9, 81, 5, 9],
        output: 182
    }
]


describe('middleNode', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        const ll = createLinkedList(input)
        expect(maxTwinSum(ll)).toBe(output)
    })
})
