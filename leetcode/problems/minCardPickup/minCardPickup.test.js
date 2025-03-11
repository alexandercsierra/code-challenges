const { minCardPickup } = require('./minCardPickup')

const testCases = [
    {
        input: [3, 4, 2, 3, 4, 7],
        output: 4
    },
    {
        input: [1, 0, 5, 3],
        output: -1
    },
    {
        input: [0, 0],
        output: 2
    },
    {
        input: [0, 1, 0],
        output: 3
    }
]

describe('minCardPickup', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(minCardPickup(input)).toBe(output)
    })
})