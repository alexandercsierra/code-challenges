const { kthFactor, kthFactorCount } = require('./theKthFactorOfN')

const testCases = [
    {
        input: { n: 12, k: 3 },
        output: 3
    },
    {
        input: { n: 7, k: 2 },
        output: 7
    },
    {
        input: { n: 4, k: 4 },
        output: -1
    }
]



describe('kthFactor', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        const { n, k } = input
        expect(kthFactor(n, k)).toBe(output)
    })
})

describe('kthFactorCount', () => {
    test.each(testCases)('$input => $output', ({ input, output }) => {
        const { n, k } = input
        expect(kthFactorCount(n, k)).toBe(output)
    })
})
