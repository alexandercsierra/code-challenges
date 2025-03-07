const { checkIfPangram, checkIfPangramShort, missingNumber, missingNumberArr, missingNumberSum, countElements } = require('./checkingForExistence')


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

const testCasesMissingNum = [
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

const testCasesCountElements = [
    {
        input: [1, 2, 3],
        output: 2
    },
    {
        input: [1, 1, 3, 3, 5, 5, 7, 7],
        output: 0
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
    test.each(testCasesMissingNum)('$input => $output', ({ input, output }) => {
        expect(missingNumber(input)).toBe(output)
    })
})
describe('missingNumberArr', () => {
    test.each(testCasesMissingNum)('$input => $output', ({ input, output }) => {
        expect(missingNumberArr(input)).toBe(output)
    })
})

describe('missingNumberSum', () => {
    test.each(testCasesMissingNum)('$input => $output', ({ input, output }) => {
        expect(missingNumberSum(input)).toBe(output)
    })
})

describe('countElements', () => {
    test.each(testCasesCountElements)('$input => $output', ({ input, output }) => {
        expect(countElements(input)).toBe(output)
    })
})