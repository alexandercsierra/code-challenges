const { reverseString } = require('./twoPointers')

describe('twoPointer problem tests', () => {
    test('reverseString', () => {
        const input = ["h", "e", "l", "l", "o"]
        const expectedOutput = ['o', 'l', 'l', 'e', 'h']

        expect(reverseString(input)).toMatchObject(expectedOutput)
    })
})