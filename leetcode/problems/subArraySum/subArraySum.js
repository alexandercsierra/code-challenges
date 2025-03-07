// 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/description/

function subarraySum({ nums, k }) {

    // because [] is a valid subarray that has sum of zero
    const prefixFreq = new Map([[0, 1]])
    let curr = 0;
    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        // add the current number to running total
        curr += nums[i];
        // see if we have a compliment sum already stored
        // for ex: if curr is 7 and k is 3, have we seen a 4 already? 
        // if so, then we can create a valid subarray ending where we are at.
        // if we have a set of sums which were [0, 4, 3, 4, 7]
        // there could be a valid subarray by subtracting the first four
        // and by subtracting the second 4
        // we can calculate this as we go since subarrays must be adjacent
        answer += prefixFreq.get(curr - k) || 0
        prefixFreq.set(curr, (prefixFreq.get(curr) || 0) + 1)
    }


    return answer
};

module.exports = { subarraySum }