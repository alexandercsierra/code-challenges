const { runningSum, minStartValue } = require('./prefixSum')

const testCases = [
    {
        input: [1, 2, 3, 4],
        output: [1, 3, 6, 10]
    },
    {
        input: [1, 1, 1, 1, 1],
        output: [1, 2, 3, 4, 5]
    },
    {
        input: [3, 1, 2, 10, 1],
        output: [3, 4, 6, 16, 17]
    }
]

const testCasesMinStart = [
    {
        input: [-3, 2, -3, 4, 2],
        output: 5
    },
    {
        input: [1, 2],
        output: 1
    },
    {
        input: [1, -2, -3],
        output: 5
    },
    {
        input: [2, 3, 5, -5, -1],
        output: 1
    }
]

describe('runningSum', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(runningSum(input)).toMatchObject(output)
    })
})
describe('minStartValue', () => {
    test.each(testCasesMinStart)('$input => $output', ({ input, output }) => {
        expect(minStartValue(input)).toBe(output)
    })
})


