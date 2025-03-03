const { findMaxAverage, longestOnes } = require('./slidingWindow')

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

const testCasesLO = [
    {
        input: { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2 },
        output: 6
    },
    {
        input: { nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k: 3 },
        output: 10
    },
    {
        input: { nums: [0, 0, 0, 0], k: 2 },
        output: 2
    }
]


describe('findMaxAverage', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(findMaxAverage(input)).toBe(output)
    })
})

describe('longestOnes', () => {
    test.each(testCasesLO)('$input => $output', ({ input, output }) => {
        expect(longestOnes(input)).toBe(output)
    })
})
