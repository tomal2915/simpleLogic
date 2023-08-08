function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || typeof totalDue !== 'number') {
        const mess1 = "Invalid input"; // Invalid input
        return mess1;
    }

    if (changeArray.length === 0) {
        const mess2 = "Empty array"; // Empty array
        return mess2;
    }

    const totalAmount = changeArray.reduce((sum, note) => sum + note, 0);
    const result = totalAmount >= totalDue;
    return result;
}

// Test cases
console.log(canPay([1, 2, 5], 10)); // false
console.log(canPay([1, 5, 5], 10)); // true
console.log(canPay([], 5)); // Empty array (bonus case: empty array)
console.log(canPay("invalid input", 5)); // Invalid input (bonus case: invalid input)
