// find players with zero or one losses
// return as 2D array where first arr represents players with zero losses, and the second represents players with exactly one loss
function findWinners(matches) {
    const lossMap = {}

    matches.forEach((player, i) => {
        const loser = player[1]
        const winner = player[0]
        lossMap[winner] = (lossMap[winner] || 0) + 0
        lossMap[loser] = (lossMap[loser] || 0) + 1
    })


    let zeroLosses = [];
    let oneLoss = [];

    Object.entries(lossMap).forEach(([key, value]) => {
        if (value === 0) {

            zeroLosses.push(Number(key))
        } else if (value === 1) {
            oneLoss.push(Number(key))
        }
    })

    const sortedZeroLosses = zeroLosses.sort((a, b) => a - b)
    const sortedOneLoss = oneLoss.sort((a, b) => a - b)


    return [sortedZeroLosses, sortedOneLoss]


};

const findWinnersSets = (matches) => {
    const zeroLossSet = new Set();
    const oneLossSet = new Set();
    const moreLossSet = new Set();


    matches.forEach(playerSet => {
        const winner = playerSet[0];
        const loser = playerSet[1];


        if (!oneLossSet.has(winner) && !moreLossSet.has(winner)) {
            zeroLossSet.add(winner)
        }

        if (!oneLossSet.has(loser) && !moreLossSet.has(loser)) {
            zeroLossSet.delete(loser)
            oneLossSet.add(loser)
        } else {
            oneLossSet.delete(loser)
            moreLossSet.add(loser)
        }

    })

    const sortedOneLoss = Array.from(oneLossSet).sort((a, b) => a - b)

    const sortedZeroLoss = Array.from(zeroLossSet).sort((a, b) => a - b)


    return [sortedZeroLoss, sortedOneLoss]
}

function largestUniqueNumber(nums) {
    const numMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], (numMap.get(nums[i]) || 0) + 1)
    }

    let max = -1;

    numMap.forEach((value, key) => {
        if (value === 1 && key > max) {
            max = key
        }
    })


    return max


};

// for a given string, see how many times, using each letter at most once, you can make the word 'balloon'. 
const maxNumberOfBalloons = (text) => {
    const balloonMap = {
        "b": 1,
        "a": 1,
        "l": 2,
        "o": 2,
        "n": 1
    }

    const letterSet = new Set(['b', 'a', 'l', 'o', 'n'])


    let currMap = {}

    // save the frequency of each letter which is needed to form the word "balloon"
    for (let i = 0; i < text.length; i++) {
        if (letterSet.has(text[i])) {
            currMap[text[i]] = (currMap[text[i]] || 0) + 1
        }

    }

    let resultArr = []

    // store the number of times you could theoretically make the word "balloon" with each individual letter (assuming all the others are present in the correct amount)
    for (let letter in currMap) {
        resultArr.push(Math.floor(currMap[letter] / balloonMap[letter]))

    }


    // if we have less than five entries, we definitely don't have enough letters
    // otherwise take the lowest number
    return resultArr.length >= 5 ? Math.min(...resultArr) : 0
}

module.exports = { findWinners, findWinnersSets, largestUniqueNumber, maxNumberOfBalloons }