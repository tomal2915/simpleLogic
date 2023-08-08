function findAddress(obj) {
    // Bonus: Validate if the input is an object
    if (typeof obj !== 'object' || obj === null) {
        const mess = "Invalid input";
        return mess;
    }
    
    const { street, house, society } = obj;
    
    // Bonus: Handle missing properties with double underscores
    const formattedStreet = street || "__";
    const formattedHouse = house || "__";
    const formattedSociety = society || "__";
    
    // Return the formatted address
    const result = `${formattedStreet}, ${formattedHouse}, ${formattedSociety}`;
    return result;
}

// Test cases
console.log(findAddress({
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}));
// Output: "10, 15A, Earth Perfect"

console.log(findAddress({
    street: 10,
    society: "Earth Perfect"
}));
// Output: "10, __, Earth Perfect"

console.log(findAddress({
    street: 10
}));
// Output: "10, __, __"

console.log(findAddress({}));
// Output: "__, __, __"

console.log(findAddress("invalid input"));
// Output: "Invalid input"