// 2351. First Letter to Appear Twice
// https://leetcode.com/problems/first-letter-to-appear-twice/description/

const repeatedChar = (s) => {
    const letters = new Set(s[0])
    for (let i = 1; i < s.length; i++) {
        if (letters.has(s[i])) return s[i];
        letters.add(s[i])
    }
}

module.exports = { repeatedChar }