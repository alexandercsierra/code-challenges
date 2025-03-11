// 2342. Max Sum of a Pair With Equal Sum of Digits
// https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/description/

function maxSum(nums) {
    let digitMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        const digitSum = nums[i].toString().split("").reduce((acc, curr) => Number(curr) + Number(acc), 0)
        if (digitMap.has(digitSum)) {
            digitMap.get(digitSum).push(nums[i])
        } else {
            digitMap.set(digitSum, [nums[i]])
        }
    }

    let maxSum = -1;

    for (let entry of digitMap) {
        const [key, value] = entry

        if (value?.length > 1) {
            value.sort((a, b) => b - a)

            const sum = value[0] + value[1]
            maxSum = Math.max(maxSum, sum)
        }
    }
    return maxSum
};

// since the problem only calls for us to compare two numbers
// we don't have to store them all
// for ex if we had [18, 43, 36, 27, 7]
// instead of storing 18, 36, and 27 under 9
// we can update the max 18 + 36 = 54
// then take the bigger of those two nums, 36 and discard 18
// then it will be 36 + 27 => new max is 63
const maxSumNoSort = (nums) => {
    let digitMap = new Map()
    let maxSum = -1;

    for (let i = 0; i < nums.length; i++) {
        const digitSum = nums[i].toString().split("").reduce((acc, curr) => Number(curr) + Number(acc), 0)
        if (digitMap.has(digitSum)) {
            maxSum = Math.max(maxSum, nums[i] + digitMap.get(digitSum))
        }
        const biggerNum = Math.max(digitMap.get(digitSum) || 0, nums[i])
        digitMap.set(digitSum, biggerNum)
    }

    return maxSum
}

module.exports = { maxSum, maxSumNoSort }