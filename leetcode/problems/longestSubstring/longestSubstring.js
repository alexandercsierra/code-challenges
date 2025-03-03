const lengthOfLongestSubstring = (s) => {
    if (!s) return 0
    let charSet = new Set();
    let highestLength = 0;


    for (let i = 0; i < s.length; i++) {
        const letter = s[i]
        if (charSet.has(letter)) {
            highestLength = Math.max(highestLength, charSet.size)
            charSet = new Set(letter)
        } else {
            charSet.add(letter)
        }
    }


    return highestLength
}
const myOtherFunction = (input) => input;

module.exports = { lengthOfLongestSubstring, myOtherFunction }