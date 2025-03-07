const { interOfMultArrs, interOfMultArrsFlat } = require('./interOfMultArrs')


const testCases = [
    {
        input: [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]],
        output: [3, 4]
    },
    {
        input: [[1, 2, 3], [4, 5, 6]],
        output: []
    }
]



describe('interOfMultArrs', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(interOfMultArrs(input)).toMatchObject(output)
    })
})
describe('interOfMultArrsFlat', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(interOfMultArrsFlat(input)).toMatchObject(output)
    })
})
