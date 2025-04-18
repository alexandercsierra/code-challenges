// Write a function that reverses a string (array)
// do this in place with O(1) memory


// initializes two pointers, starting at each end
// we will switch the values at each end and iterate inwards
// if there is a middle letter, it can remain the same
// when we crossover the middle, we know to stop
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


// Given an integer array, nums, sorted in non-decreasing order
// return an array of the squares of each number 
// (also in non-decreasing order)

// initilize 3 pointers, noting two points of comparison that will move inwards, plus a results pointer which indicates where we will place the next biggest result
// this only works because we know the input array is sorted
// so be it positive or negative we know the biggest squares will result from values on either end of the array
// therefore we can start by looking at each end and placing the bigger value in the last element of our output array
// this way it will automatically be sorted smallest to largest as we put elements in
const sortedSquares = (intArr) => {
    if (!intArr?.length) return []
    if (intArr.length === 1) return [intArr[0] * intArr[0]]

    const result = []

    let left = 0;
    let right = intArr?.length - 1;
    let resultPointer = right

    // need to account for left === right here because otherwise we would skip over the middle number, if it exists
    // unlike in the string example, where that one could just be left alone, here we need to set it's value in the result array
    while (left <= right) {
        const leftSquare = intArr[left] * intArr[left];
        const rightSquare = intArr[right] * intArr[right];

        if (leftSquare > rightSquare) {
            result[resultPointer] = leftSquare;
            left++
        } else {
            // which element gets added when the squares are equal is arbitrary so catching both remaining cases in the else here    
            result[resultPointer] = rightSquare;
            right--;
        }

        resultPointer--
    }

    return result

}


// works, but could create a gigantic squares array if an in is particularly big
// stores the square at the index equal to the value of that square
// this ensures it will be in order without having to sort
// filter out the blank spaces before returning
// account for 0 which should return as-is
const sortedSquaresLarge = (intArr) => {

    const squares = [];

    intArr.forEach(int => {
        const square = int * int;
        squares[square] = square
    })

    return squares.filter(sq => sq === 0 ? true : Boolean(sq))
}


// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


// Looks at both strings from either end, comparing letters and incrementing in until there is crossover
// Only needs to iterate over roughly half of t
// But in real life would probably just iterate through t from beginning to end since this adds unnecessary complexity 
function isSubsequence(s, t) {

    // if empty, it will always be considered a substring of t
    if (s === "") return true


    let sLeft = 0;
    let sRight = s.length - 1;
    let tLeft = 0;
    let tRight = t.length - 1;

    let count = 0

    while (tLeft <= tRight) {
        count++;
        const sLetterLeft = s[sLeft];
        const sLetterRight = s[sRight];

        const tLetterLeft = t[tLeft];
        const tLetterRight = t[tRight];

        // this check for tLeft === tRight makes sure that if we are in the center of t 
        // and both pointers are pointing to the same letter, we don't count it twice
        // is arbitrarily on the first if but could be either
        if (sLetterLeft === tLetterLeft && tLeft !== tRight) {
            if (sLeft === sRight) return true
            sLeft++
        }

        if (sLetterRight === tLetterRight) {
            if (sLeft === sRight) return true
            sRight--
        }

        tLeft++;
        tRight--;

    }

    console.log({ count, sLen: s.length, tLen: t.length })

    return false;
};

function isSubsequenceSimple(s, t) {
    let sPointer = 0;


    for (let i = 0; i < t.length; i++) {
        const letter = t[i]
        if (sPointer === s.length) return true
        if (letter === s[sPointer]) {
            sPointer++
        }

    }

    return sPointer === s.length
}







module.exports = { reverseString, sortedSquares, sortedSquaresLarge, isSubsequence, isSubsequenceSimple }



