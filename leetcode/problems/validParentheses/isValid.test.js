const {isValid} = require('./isValid')

const testCases = [
    {
        input: "()",
        output: true
    },
    {
        input: "()[]{}",
        output: true
    },
    {
        input: "(]",
        output: false
    },
    {
        input: "([])",
        output: true
    },
]



describe('isValid', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
      
        expect(isValid(input)).toBe(output)
    })
})
