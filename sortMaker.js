function sortMaker(arr) {
    // Bonus: Validate input array
    if (!Array.isArray(arr) || arr.length !== 2 || arr.some(item => typeof item !== 'number')) {
        return "Invalid input";
    }
    
    const [first, second] = arr;
    
    // Check if any element is negative
    if (first < 0 || second < 0) {
        const mess1 = "Invalid input";
        return mess1;
    }
    
    // Check if the elements are equal
    if (first === second) {
        const mess2 = "equal";
        return mess2;
    }
    
    // Sort and return the array in ascending to descending order
    const result = [Math.max(first, second), Math.min(first, second)];
    return result;
}

// Test cases
console.log(sortMaker([2, 3])); // Output: [3,2]
console.log(sortMaker([4, 2])); // Output: [4,2]
console.log(sortMaker([4, 4])); // Output: "equal"
console.log(sortMaker([1, 2])); // Output: [2,1]
console.log(sortMaker([4,-2])); // Output: "Invalid"
console.log(sortMaker([2, "apple"])); // Output: "Invalid"
console.log(sortMaker([6, 6, 6])); // Output: "Invalid"