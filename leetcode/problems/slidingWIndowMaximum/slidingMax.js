function maxSlidingWindow({ nums, k }) {
  // store maximums
  const answer = [];
  // store indexes in decreasing order
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // while there's something in deque and current num is greater than last stored num
    // pop it off, because we need the list to be decreasing
    while (deque.length && nums[i] > nums[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(i);
    // if the index stored at deque[0] + k === i, k being the length of the window
    // that means we have moved the left portion of the window past the index stored at deque[0]
    if (deque[0] + k === i) {
      deque.shift();
    }
    if (i >= k - 1) {
      answer.push(nums[deque[0]]);
    }
  }
  return answer;
}

module.exports = { maxSlidingWindow };
