export default function divideFunction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('cannot divide by 0');
    }
    return numerator / denominator;
}

// Example usage with error handling
try {
    console.log(divideFunction(10, 2)); // Outputs: 5
    console.log(divideFunction(10, 0));  // This will throw an error
} catch (error) {
    console.error(error.message); // Outputs: cannot divide by 0
}

