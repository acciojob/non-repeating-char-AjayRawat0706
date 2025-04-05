function firstNonRepeatedChar(str) {
    const charCount = {};

    // First pass: count character frequencies
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // All characters are repeated or string is empty
}

// Example usage:
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
