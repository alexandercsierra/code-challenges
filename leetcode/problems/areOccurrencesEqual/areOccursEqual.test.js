const { checkOccursEqual } = require('./areOccursEqual')

const testCases = [
    {
        input: "abacbc",
        output: true
    },
    {
        input: 'aaabb',
        output: false
    }
]


describe('checkOccursEqual', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(checkOccursEqual(input)).toBe(output)
    })
})