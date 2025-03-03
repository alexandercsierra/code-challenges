const { findMaxAverage } = require('./slidingWindow')

const testCases = [
    {
        input: { nums: [1, 12, -5, -6, 50, 3], k: 4 },
        output: 12.75000
    },
    {
        input: { nums: [5], k: 1 },
        output: 5.00000
    }
]



describe('findMaxAverage', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(findMaxAverage(input)).toBe(output)
    })
})
