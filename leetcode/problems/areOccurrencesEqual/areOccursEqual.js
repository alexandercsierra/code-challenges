// 1941. Check if All Characters Have Equal Number of Occurrences
// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/

const checkOccursEqual = (str) => {
    // create an object which maps a char to how frequently it appears
    const freqMap = {}

    for (let i = 0; i < str.length; i++) {
        freqMap[str[i]] = (freqMap[str[i]] || 0) + 1
    }

    // in order to return true, we will have wanted each frequency value to be the same
    // by creating a set we ensure we have only unique numbers
    // if they all appeared in the string evenly, we'd have only one unique number
    const uniqueFreqs = new Set(Object.values(freqMap))

    return uniqueFreqs.size === 1


}

module.exports = { checkOccursEqual }