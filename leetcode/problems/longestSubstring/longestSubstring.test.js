const { lengthOfLongestSubstring } = require('./longestSubstring')

const testCases = [
    {
        input: "abcabcbb",
        output: 3
    },
    {
        input: "bbbbb",
        output: 1
    },
    {
        input: "pwwkew",
        output: 3
    },
    {
        input: " ",
        output: 0
    }
]



describe('myFunction', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(lengthOfLongestSubstring(input)).toBe(output)
    })
})

