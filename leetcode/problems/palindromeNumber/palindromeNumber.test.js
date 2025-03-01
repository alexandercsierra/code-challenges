const { isPalindrome, isPalindromeNumber } = require('./palindromeNumber')

const testCases = [{
    input: 121,
    output: true
},
{
    input: -121,
    output: false
},
{
    input: 10,
    output: false
}
]


describe('isPalindrome', () => {
    test.each(testCases)('$input => $ouput', ({ input, output }) => {
        expect(isPalindrome(input)).toBe(output)
    })
})

describe('isPalindromeNumber', () => {
    test.each(testCases)('$input => $ouput', ({ input, output }) => {
        expect(isPalindrome(input)).toBe(output)
    })
})