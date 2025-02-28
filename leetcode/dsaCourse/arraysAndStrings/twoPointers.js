// Write a function that reverses a string (array)
// do this in place with O(1) memory

const reverseString = (stringArr) => {
    // if empty or length 1, nothing to reverse, return as-is
    if (stringArr.length < 2) return stringArr

    let pointer1 = 0;
    let pointer2 = stringArr.length - 1 - pointer1

    while (pointer1 < pointer2) {
        const firstLetter = stringArr[pointer1];
        const lastLetter = stringArr[pointer2];

        stringArr[pointer1] = lastLetter;
        stringArr[pointer2] = firstLetter

        pointer1++;
        pointer2--;
    }

}


module.exports = { reverseString }



