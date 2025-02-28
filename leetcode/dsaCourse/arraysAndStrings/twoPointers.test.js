const { reverseString, sortedSquares, sortedSquaresLarge } = require('./twoPointers')

describe('twoPointer problem tests', () => {

    describe('reverseString', () => {

        test('reverses odd length string', () => {

            const input = ["h", "e", "l", "l", "o"]
            const expectedOutput = ['o', 'l', 'l', 'e', 'h']

            reverseString(input)

            expect(input).toMatchObject(expectedOutput)
        })
        test('reverses even length string', () => {

            const input = ["f", "o", "o", "d"]
            const expectedOutput = ['d', 'o', 'o', 'f']

            reverseString(input)

            expect(input).toMatchObject(expectedOutput)
        })
        test('handles empty array', () => {
            const input = []
            const expectedOutput = []

            reverseString(input)

            expect(input).toMatchObject(expectedOutput)
        })
        test('handles array of length 1', () => {
            const input = ["a"]
            const expectedOutput = ["a"]

            reverseString(input)

            expect(input).toMatchObject(expectedOutput)
        })
    })



    describe('sortedSquares', () => {
        test('returns correct squares', () => {
            const input = [-4, -1, 0, 3, 10]
            const squares = [0, 1, 9, 16, 100]

            const output = sortedSquares(input)
            const outputLarge = sortedSquaresLarge(input)
            expect(output).toMatchObject(squares)
            expect(outputLarge).toMatchObject(squares)
        })

        test('handles empty input array', () => {
            expect(sortedSquares([])).toMatchObject([])
        })

        test('handles array of length 1', () => {
            expect(sortedSquares([2])).toMatchObject([4])
        })
    })

})

