const { reverseString, sortedSquares, sortedSquaresLarge, isSubsequence, isSubsequenceSimple } = require('./twoPointers')

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

    describe('isSubsequence', () => {
        test('handles normal inputs', () => {
            const s1 = "abc"
            const t1 = "ahbgdc"

            const result1 = isSubsequence(s1, t1);
            expect(result1).toBe(true)

            const simpleResult1 = isSubsequenceSimple(s1, t1)
            expect(simpleResult1).toBe(true)

            const s2 = "axc"
            const t2 = "ahbgdc"

            const result2 = isSubsequence(s2, t2);
            expect(result2).toBe(false)

            const simpleResult2 = isSubsequenceSimple(s2, t2)
            expect(simpleResult2).toBe(false)

            const s3 = "abc"
            const t3 = "axbyc"

            const result3 = isSubsequence(s3, t3)
            expect(result3).toBe(true)

            const simpleResult3 = isSubsequenceSimple(s3, t3)
            expect(simpleResult3).toBe(true)

        })

        test('handles empty strings', () => {
            const emptyS = ""
            const t = "ahbgdc"

            const result1 = isSubsequence(emptyS, t)
            expect(result1).toBe(true)

            const simpleResult1 = isSubsequenceSimple(emptyS, t)
            expect(simpleResult1).toBe(true)

            const emptyT = "";

            const result2 = isSubsequence(emptyS, emptyT)
            expect(result2).toBe(true)

            const simpleResult2 = isSubsequenceSimple(emptyS, emptyT)
            expect(simpleResult2).toBe(true)

            const s = "abc";

            const result3 = isSubsequence(s, emptyT)
            expect(result3).toBe(false)

            const simpleResult3 = isSubsequenceSimple(s, emptyT)
            expect(simpleResult3).toBe(false)
        })

        test('handles double letters in middle of s', () => {
            const s = "abbc";
            const t = "ahbdc";

            const result = isSubsequence(s, t)
            expect(result).toBe(false)

            const simpleResult = isSubsequenceSimple(s, t)
            expect(simpleResult).toBe(false)
        })
    })

})

