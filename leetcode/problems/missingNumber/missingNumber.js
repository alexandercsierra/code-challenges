// 268. Missing Number
// https://leetcode.com/problems/missing-number/description/


function missingNumber(nums) {
    const foundNums = Array(nums.length).fill(null)
    nums.forEach(num => foundNums[num] = num)

    const missing = foundNums.indexOf(null)
    return missing === -1 ? nums.length : missing
};


function missingNumberWithSort(nums) {
    nums.sort((a, b) => Number(a) - Number(b))

    for (let i = 0; i < nums.length; i++) {
        if (i !== nums[i]) return i
    }

    return nums.length
};

module.exports = { missingNumber, missingNumberWithSort }