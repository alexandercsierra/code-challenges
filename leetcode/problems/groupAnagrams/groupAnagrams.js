// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/description/
function groupAnagrams(strs) {
    let wordMap = new Map();

    for (let i = 0; i < strs.length; i++) {
        const sortedWord = strs[i].split("").sort().join("")

        if (wordMap.has(sortedWord)) wordMap.set(sortedWord, [...wordMap.get(sortedWord), strs[i]])
        else {
            wordMap.set(sortedWord, [strs[i]])
        }
    }

    return Array.from(wordMap.values())
};

module.exports = { groupAnagrams }