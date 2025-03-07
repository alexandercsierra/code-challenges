const { subarraySum } = require('./subArraySum')

const testCases = [
    {
        input: { nums: [1, 1, 1], k: 2 },
        output: 2
    },
    {
        input: { nums: [1, 2, 3], k: 3 },
        output: 2
    },
    {
        input: { nums: [1], k: 0 },
        output: 0
    },
    {
        input: { nums: [1, -1, 0], k: 0 },
        output: 3
    }
]

describe('subarraySum', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(subarraySum(input)).toBe(output)
    })
})