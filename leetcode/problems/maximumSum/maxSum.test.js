const { maxSum, maxSumNoSort } = require('./maxSum')

const testCases = [{
    input: [18, 43, 36, 13, 7],
    output: 54
},
{
    input: [10, 12, 19, 14],
    output: -1
},
{
    input: [18, 43, 36, 27, 7],
    output: 63
}
]

describe('maxSum', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(maxSum(input)).toBe(output)
    })
})
describe('maxSumNoSort', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(maxSumNoSort(input)).toBe(output)
    })
})