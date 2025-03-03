//  713. Subarray Product Less Than K
// https://leetcode.com/problems/subarray-product-less-than-k/description/

const numSubarrayProductLessThanK = ({ nums, k }) => {
    // since a valid product must be LESS than k, and nums will always contain positive numbers, we can never have a product of less than 1
    if (k <= 1) {
        return 0
    }

    let left = 0;
    // start at 1 since we are dealing with multiplication
    let currProduct = 1;
    let currCount = 0;


    for (let right = 0; right < nums.length; right++) {

        // we just added a new num, so mutiply it with old product
        currProduct = currProduct * nums[right];

        // if this new product exceeds our limit, remove the leftmost element and check the next element in from the left
        // continue until we have a product less than k
        while (currProduct >= k) {
            currProduct /= nums[left]
            left++
        }

        // get the current length of the range we are looking at
        const currLength = right - left + 1;
        currCount += currLength
    }
    return currCount
}

module.exports = { numSubarrayProductLessThanK }