/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (mapping[char]) {
            // If the character is a closing bracket
            const topElement = stack.pop(); // Get the top element from the stack
            if (topElement !== mapping[char]) {
                return false; // If it doesn't match, return false
            }
        } else {
            // If it's an opening bracket
            stack.push(char); // Push it onto the stack
        }
    }

    // If the stack is empty, all opening brackets have been matched
    return stack.length === 0;
};


module.exports = { isValid };


