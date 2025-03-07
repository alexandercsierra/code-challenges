const { myFunction } = require('./template')

const testCases = [
    {
        input: true,
        output: true
    },
    {
        input: false,
        output: false
    }
]



describe('myFunction', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(myFunction(input)).toBe(output)
    })
})

