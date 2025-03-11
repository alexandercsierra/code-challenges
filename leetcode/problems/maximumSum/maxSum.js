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

module.exports = { maxSum }