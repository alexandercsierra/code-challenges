// 1248. Count Number of Nice Subarrays
// https://leetcode.com/problems/count-number-of-nice-subarrays/description/

function numberOfSubarrays({ nums, k }) {
    // because [] represents a subarray with zero odd numbers
    const prefixOdd = new Map([[0, 1]])
    // running count of odd numbers encountered
    let count = 0;
    // number of subarrays containing exactly k odd numbers
    let answer = 0;


    for (let i = 0; i < nums.length; i++) {
        const numIsOdd = nums[i] % 2 !== 0;
        // if we find an odd number, update running count
        if (numIsOdd) {
            count++;
        }

        // either way, update answer according to if we have an appropriate compliment
        answer += (prefixOdd.get(count - k) || 0)
        prefixOdd.set(count, (prefixOdd.get(count) || 0) + 1)
    }

    return answer
};

module.exports = { numberOfSubarrays }