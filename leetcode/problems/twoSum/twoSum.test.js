const { twoSum } = require('./twoSum')

const testCases = [
    {
        input: { nums: [2, 7, 11, 15], target: 9 },
        output: [0, 1]
    },
    {
        input: { nums: [3, 2, 4], target: 6 },
        output: [1, 2]
    },
    {
        input: { nums: [3, 3], target: 6 },
        output: [0, 1]
    }
]

describe('twoSum', () => {

    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(twoSum(input)).toMatchObject(output)
    })
})
