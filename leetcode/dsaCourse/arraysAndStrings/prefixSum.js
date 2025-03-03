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

module.exports = { runningSum, minStartValue }