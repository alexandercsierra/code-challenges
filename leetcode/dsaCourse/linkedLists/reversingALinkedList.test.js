const {reverseBetween} = require('./reversingALinkedList')
const { createLinkedList } = require('../../utls/linkedLists')


const testCases = [
    {
        input: {head: [1, 2, 3, 4, 5], left: 2, right: 4},
        output: [1,4,3,2,5]
    },
    {
        input: {head: [1, 2, 3, 4, 5], left: 1, right: 4},
        output: [4, 3, 2, 1, 5]
    },
    {
        input: {head: [5], left: 1, right: 1},
        output: [5]
    }
   
]


describe('reverseBetween', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        const {head, left, right} = input
        const ll = createLinkedList(head)
        const result = createLinkedList(output)
        expect(reverseBetween({head: ll, right, left})).toMatchObject(result)
    })
})
