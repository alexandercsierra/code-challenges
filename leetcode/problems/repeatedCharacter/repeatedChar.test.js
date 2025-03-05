const { repeatedChar } = require('./repeatedChar')

const testCases = [
    {
        input: "abccbaacz",
        output: "c"
    },
    {
        input: "abcdd",
        output: "d"
    }
]



describe('repeatedChar', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(repeatedChar(input)).toBe(output)
    })
})

