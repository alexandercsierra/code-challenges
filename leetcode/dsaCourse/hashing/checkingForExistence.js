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

// relies on sorting the array first
// checks to see if current num is one more than last
const missingNumber = (nums) => {

    nums.sort((a, b) => a - b)
    let missingNum = nums[nums.length - 1] + 1;

    let lastNum = nums[0]
    if (lastNum !== 0) return 0
    for (let i = 1; i < nums.length; i++) {
        const currNum = nums[i];
        if (currNum !== lastNum + 1) return lastNum + 1;
        lastNum = currNum
    }

    return missingNum
}


// fills an array of nulls, then fills in actual numbers
// according to index one by one
// whatever null still remains must be the missing number
// unless they are all filled in which case it is the last value + 1
const missingNumberArr = (nums) => {
    const foundNums = Array(nums.length).fill(null)
    nums.forEach(num => foundNums[num] = num)

    const missing = foundNums.indexOf(null)
    return missing === -1 ? nums.length : missing
}


// relies on math for calculating sum of all nums for this length of array
// whatever is left from what should be the sum is the missing number
const missingNumberSum = (nums) => {
    const length = nums.length;
    // math formula for sum of ints up to length
    const expectedSum = (length * (length + 1)) / 2
    const sum = nums.reduce((a, b) => a + b, 0)
    return expectedSum - sum

}

const countElements = (arr) => {
    const uniqueNums = new Set(arr)

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (uniqueNums.has(arr[i] + 1)) {
            count++
        }
    }

    return count
}

module.exports = {
    checkIfPangram, checkIfPangramShort, missingNumber, missingNumberArr, missingNumberSum, countElements
}

