// #1492. The kth Factor of n
// https://leetcode.com/problems/the-kth-factor-of-n/description/?envType=study-plan-v2&envId=amazon-spring-23-high-frequency


// using an array
const kthFactor = (n, k) => {
    const factors = [];

    for (let i = 1; i <= n; i++) {
        const isFactor = n % i === 0;
        if (isFactor) {
            factors.push(i)
        }
    }

    return factors?.[k - 1] ?? -1
};

// using a count instead, reducing space complexity and returning early if value found
function kthFactorCount(n, k) {

    if (k === 1) return 1
    let factorCount = 1

    for (let i = 2; i <= n; i++) {
        const isFactor = n % i === 0;
        if (isFactor) {
            factorCount++
            if (factorCount === k) return i
        }
    }

    return -1
};

module.exports = { kthFactor, kthFactorCount }