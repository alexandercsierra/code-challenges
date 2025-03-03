const { numSubarrayProductLessThanK } = require('./subArrayProduct')

const testCases = [
    {
        input: { nums: [10, 5, 2, 6], k: 100 },
        output: 8
    },
    {
        input: { nums: [1, 2, 3], k: 0 },
        output: 0
    },
    {
        input: { nums: [1, 1, 1], k: 1 },
        output: 0
    }
]



describe('myFunction', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(numSubarrayProductLessThanK(input)).toBe(output)
    })
})

