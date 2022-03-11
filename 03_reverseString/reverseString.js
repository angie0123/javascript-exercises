const reverseString = function(str) {
    if (str.length <= 1) return str;
    return str.charAt(str.length - 1) + reverseString(str.slice(1, str.length - 1)) + str.charAt(0);
};

// Do not edit below this line
module.exports = reverseString;
