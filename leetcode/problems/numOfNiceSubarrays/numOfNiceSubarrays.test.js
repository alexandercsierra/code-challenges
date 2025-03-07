const { numberOfSubarrays } = require('./numOfNiceSubarrays')

const testCases = [
    {
        input: { nums: [1, 1, 2, 1, 1], k: 3 },
        output: 2
    },
    {
        input: { nums: [2, 4, 6], k: 1 },
        output: 0
    },
    {
        input: { nums: [2, 2, 2, 1, 2, 2, 1, 2, 2, 2], k: 2 },
        output: 16
    }
]

describe('numOfSubArrays', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(numberOfSubarrays(input)).toBe(output)
    })
})

