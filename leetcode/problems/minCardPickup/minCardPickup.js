// 2260. Minimum Consecutive Cards to Pick Up
// https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/description/
const minCardPickup = (cards) => {

    const cardInds = new Map()
    let minDistance = Infinity

    for (let i = 0; i < cards.length; i++) {
        if (cardInds.has(cards[i])) {
            minDistance = Math.min(minDistance, i - cardInds.get(cards[i]) + 1)
        }
        cardInds.set(cards[i], [i])

    }

    return minDistance === Infinity ? -1 : minDistance
}

module.exports = { minCardPickup }