// 2248. Intersection of Multiple Arrays
// https://leetcode.com/problems/intersection-of-multiple-arrays/description/


// the gotcha here is that the subarrays contain unique nums
// therefore if we have 3 subarrays, and the number appears less than 3 times, it did not appear in all subarrays

const interOfMultArrs = (arr) => {
    const freqMap = new Map()

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const numCount = freqMap.get(arr[i][j])
            numCount ? freqMap.set(arr[i][j], numCount + 1) : freqMap.set(arr[i][j], 1)
        }
    }

    const newArr = [];

    for (const [key, value] of freqMap) {
        if (value === arr.length) {
            newArr.push(key)
        }
    }

    return newArr.sort()
}


// avoids a nested loop by calling .flat() first
// this works here because, again, each array will have 'distinct' numbers
const interOfMultArrsFlat = (nums) => {
    const freqMap = new Map();

    const flatNums = nums.flat()

    for (let i = 0; i < flatNums.length; i++) {
        freqMap.set(flatNums[i], (freqMap.get(flatNums[i]) || 0) + 1)
    }

    const result = [];

    freqMap.forEach((value, key) => {
        console.log({ key, value })
        if (value === nums.length) {
            result.push(key)
        }
    })

    return result.sort((a, b) => a - b)
}

module.exports = { interOfMultArrs, interOfMultArrsFlat }