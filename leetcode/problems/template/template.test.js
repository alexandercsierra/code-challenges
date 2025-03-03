const { myFunction, myOtherFunction } = require('./template')

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

describe('myOtherFunction', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(myOtherFunction(input)).toBe(output)
    })
})