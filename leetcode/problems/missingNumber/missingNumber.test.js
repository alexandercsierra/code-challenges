const { missingNumber, missingNumberWithSort } = require('./missingNumber')


const testCases = [
    {
        input: [3, 0, 1],
        output: 2
    },
    {
        input: [0, 1],
        output: 2
    },
    {
        input: [9, 6, 4, 2, 3, 5, 7, 0, 1],
        output: 8
    },
    {
        input: [45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14],
        output: 18
    },
]

describe('array solution', () => {

    test.each(testCases)('$input => is missing: $output', ({ input, output }) => {
        expect(missingNumber(input)).toBe(output)
    })
})

describe('.sort solution', () => {
    test.each(testCases)('$input => is missing: $output', ({ input, output }) => {
        expect(missingNumberWithSort(input)).toBe(output)
    })
})

