// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

const isValid = (s) => {
    const matches = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i])
        } else {
            const lastSymbol = stack.pop()
            if (matches[lastSymbol] !== s[i]) return false
        }
    }

    return stack.length === 0;

}

module.exports={isValid}