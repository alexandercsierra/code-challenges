const { checkIfPangram, checkIfPangramShort } = require('./checkingForExistence')


const testCasesPangram = [
    {
        input: "thequickbrownfoxjumpsoverthelazydog",
        output: true
    },
    {
        input: 'leetcode',
        output: false
    }
]


describe('checkIfPangram', () => {
    test.each(testCasesPangram)('$input => $output', ({ input, output }) => {
        expect(checkIfPangram(input)).toBe(output)
    })
})


describe('checkIfPangramShort', () => {
    test.each(testCasesPangram)('$input => $output', ({ input, output }) => {
        expect(checkIfPangramShort(input)).toBe(output)
    })
})