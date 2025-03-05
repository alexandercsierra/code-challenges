const { checkIfPangram, checkIfPangramShort, missingNumber, missingNumberArr, missingNumberSum } = require('./checkingForExistence')


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

const testCassesMissingNum = [
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
        input: [1],
        output: 0
    },
    {
        input: [1, 0],
        output: 2
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

describe('missingNumber', () => {
    test.each(testCassesMissingNum)('$input => $output', ({ input, output }) => {
        expect(missingNumber(input)).toBe(output)
    })
})
describe('missingNumberArr', () => {
    test.each(testCassesMissingNum)('$input => $output', ({ input, output }) => {
        expect(missingNumberArr(input)).toBe(output)
    })
})

describe('missingNumberSum', () => {
    test.each(testCassesMissingNum)('$input => $output', ({ input, output }) => {
        expect(missingNumberSum(input)).toBe(output)
    })
})