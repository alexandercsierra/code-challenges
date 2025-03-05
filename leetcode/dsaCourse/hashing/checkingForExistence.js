// check if a string contains at least one of every letter
// input will always be english lowercase letters

const checkIfPangram = (sentence) => {
    const letterSet = new Set(sentence[0])

    for (let i = 0; i < sentence.length; i++) {
        letterSet.add(sentence[i])
        if (letterSet.size === 26) return true
    }

    return letterSet.size === 26
}

// if you pass in a string to new Set()
// it will create a set of unique letters in that string
const checkIfPangramShort = (sentence) => {
    console.log('set', new Set(sentence))
    return new Set(sentence).size === 26

}

module.exports = { checkIfPangram, checkIfPangramShort }