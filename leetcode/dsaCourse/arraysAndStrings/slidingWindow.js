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


module.exports = { findMaxAverage }