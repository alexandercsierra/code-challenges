const { findWinners, findWinnersSets } = require('./counting')

const testCasesFindWinners = [
    // {
    //     input: [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]],
    //     output: [[1, 2, 10], [4, 5, 7, 8]]
    // },
    // {
    //     input: [[2, 3], [1, 3], [5, 4], [6, 4]],
    //     output: [[1, 2, 5, 6], []]
    // },
    {
        input: [[1, 5], [2, 5], [2, 8], [2, 9], [3, 8], [4, 7], [4, 9], [5, 7], [6, 8]],
        output: [[1, 2, 3, 4, 6], []]
    }
]

// describe('findWinners', () => {
//     test.each(testCasesFindWinners)('$input => $output', ({ input, output }) => {
//         expect(findWinners(input)).toMatchObject(output)
//     })
// })

describe('findWinnersSets', () => {
    test.each(testCasesFindWinners)('$input => $output', ({ input, output }) => {
        expect(findWinnersSets(input)).toMatchObject(output)
    })
})