function matchFinder(string1, string2) {
    // Bonus: Validate input strings
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        const mess = "Invalid input";
        return mess;
    }
    
    // Check if a complete match of str2 is found in str1
    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(matchFinder("John Doe", "ohn")); // Output: true
console.log(matchFinder("JavaScript", "Code")); // Output: false
console.log(matchFinder("Peter Parker", "Pen")); // Output: false
console.log(matchFinder("Peter Parker", "pet")); // Output: false
console.log(matchFinder("sample text", 123)); // Output: "Invalid input" (Bonus handling)
