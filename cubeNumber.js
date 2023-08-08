function cubeNumber(number) {
    // Check if the input number is a valid number
    if (typeof number === 'number' && number > 0) {
        // Cube the input number is a number and return the result
        const result = number** 3;
        return result;
    } else {
        // Handle invalid input (non-number or negative number)
        const mess = "Invalid input number. Please provide a positive number.";
        return mess;
    }
}

// Test cases
console.log(cubeNumber(3)); // Output: 27 (3^3)
console.log(cubeNumber(4)); // Output: 64 (4^3)
console.log(cubeNumber(0)); // Output: "Input is non-number or negative number" (Bonus handling)
console.log(cubeNumber(-2)); // Output: "Input is non-number or negative number" (Bonus handling)
console.log(cubeNumber("Hello")); // Output: "Input is non-number or negative number" (Bonus handling)