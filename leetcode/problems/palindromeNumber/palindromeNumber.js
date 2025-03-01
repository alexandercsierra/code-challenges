function isPalindrome(x) {
    const numStr = x.toString();

    let start = 0;
    let end = numStr.length - 1

    while (start < end) {
        if (numStr[start] !== numStr[end]) return false
        start++
        end--;
    }

    return true
};


function isPalindromeNumber(x) {
    // a negative number will have a "-" at the beginning
    // can never be an exact mirror since "-" is only on one side
    if (x < 0) return false;

    let num = x;
    let reversedNum = 0;

    while (num > 0) {
        // gets the last digit by giving us the remainder (num in the ones place) of dividing by 10
        const lastDigit = num % 10;

        // to make way for the new last digit, multiply by 10 to move that number to the tens place
        reversedNum = (reversedNum * 10) + lastDigit

        // to move the next digit to the right, making it the new last digit
        // divide by 10 and discard the remainder
        num = Math.floor(num / 10)

    }

    // now we have assembled what the palindrome would be, check against 
    return x === reversedNum
};

module.exports = { isPalindrome, isPalindromeNumber }