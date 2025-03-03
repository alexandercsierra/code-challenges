// nums is an array of integers
// k denotes the length of the subarray we are looking to average
// find the largest average we can make with any subarray of nums with length k
const findMaxAverage = ({ nums, k }) => {

    // if there is only one element it is it's own average
    if (nums.length === 1) return nums[0]

    // we'll use a sliding window which always be of length k
    // loop through each element incrementing right and left
    let left = 0;
    let right = k;
    let currSum = 0;
    let maxAverage = 0;

    // calculate the first average
    for (let i = 0; i < k; i++) {
        currSum += nums[i]
    }

    maxAverage = currSum / k;

    // if the window and the array are the same size we can stop here
    // this is the only average with the desired length
    if (k === nums.length) return maxAverage

    while (right < nums.length) {
        currSum = currSum - nums[left] + nums[right];
        maxAverage = Math.max(currSum / k, maxAverage);
        left++;
        right++;
    }

    return maxAverage
}

// return longest consecutive 1's
// all integers in nums will be either 0 or 1
// you can flip at most k 0's to be 1's
const longestOnes = ({ nums, k }) => {

    if (k < nums.length && !nums.includes(1)) return k

    let left = 0;
    let numZeroes = 0;
    let longestLength = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) numZeroes++;

        while (numZeroes > k) {
            if (nums[left] === 0) {
                numZeroes--
            }
            left++;

        }
        longestLength = Math.max(i - left + 1, longestLength)
    }

    return longestLength
}


module.exports = { findMaxAverage, longestOnes }