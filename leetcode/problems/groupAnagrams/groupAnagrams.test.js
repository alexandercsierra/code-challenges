const { groupAnagrams } = require('./groupAnagrams')

const testCases = [
    {
        input: ["eat", "tea", "tan", "ate", "nat", "bat"],
        output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

    },
    {
        input: [""],
        output: [[""]]
    },
    {
        input: ["a"],
        output: [["a"]]
    }
]

describe('groupAnagrams', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        expect(groupAnagrams(input)).toMatchObject(output)
    })
})