// return an array of two indexes which point to numbers that add up to the target given. 
// there will be only one solution
const twoSum = ({ nums, target }) => {
    const diffMap = new Map([[nums[0], 0]]);

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        const diff = target - num;
        if (diffMap.has(diff)) return [diffMap.get(diff), i]
        else diffMap.set(num, i)
    }

    return [-1, -1]
}

module.exports = { twoSum }