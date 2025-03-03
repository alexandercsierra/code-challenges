const runningSum = (nums) => {
    // initialize array of sums
    let sumArr = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        // the last added sum will contain all the others
        // add lastest sum to current number and add to answer
        sumArr.push(nums[i] + sumArr[i - 1])
    }

    return sumArr
};

const minStartValue = (nums) => {
    // if there are no negative nums or zeroes, then this already satisfies the condition that every sum be greater than 0
    // return the minimum added value of 1
    if (nums.every(num => num >= 0)) return 1;

    // create prefix sum array
    const sums = [nums[0]]
    // [2, 3, 5, -5, -1]
    // [2, 5, 10, 5, 4]
    for (let i = 1; i < nums.length; i++) {
        sums.push(nums[i] + sums[sums.length - 1])
    }

    // in order to make sure every sum is above zero
    // get the minimum, cancel it out, and add 1
    const minValue = Math.min(...sums)
    if (minValue >= 0) return 1;
    return 0 - minValue + 1;
}

// given an array of numbers, nums, and radius k
// return an array of averages where the the middle number has k elements on either side
// if there aren't enough on either side (if k is 3 and index is 0)
// return -1 for that average

const getAverages = ({ nums, k }) => {
    // initialize array with -1's so we just have to fill in valid averages 
    const averages = Array(nums.length).fill(-1)

    // if there are zero elements on either side to consider
    // the average is the average of 1 element each time
    // return array as-is
    if (k === 0) return nums

    // if the total length of a valid subarray to take the average of (a radius of k on each side plus middle element) is longer than the input array we will never have a valid average
    // return the array of -1's 
    if ((k * 2) + 1 > nums.length) return averages


    // otherwise we have to calculate the running sum
    let prefixSum = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(nums[i] + prefixSum[prefixSum.length - 1])
    }

    // initialize pointers for each bound plus the middle element
    let left = 0;
    let right = k * 2;
    let mid = k


    // we can worry only about the right end since if that is beyond the end of the array we would fall back to -1 anyway
    // but this is already populated in the result array if invalid
    while (right < nums.length) {

        // calculate the sum of the current window
        const currSum = prefixSum[right] - prefixSum[left] + nums[left]

        // total length of window will be a radius of k on both sides plust the middle element
        // we are told to discard any decimal
        averages[mid] = Math.floor(currSum / ((k * 2) + 1))

        // increment the window
        right++
        mid++
        left++
    }


    return averages
}

module.exports = { runningSum, minStartValue, getAverages }