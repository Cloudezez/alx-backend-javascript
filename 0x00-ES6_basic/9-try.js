export default function guardrail(mathFunction) {
    const queue = [];
    
    try {
        const result = mathFunction(); // Execute the math function
        queue.push(result); // Append the result to the queue
    } catch (error) {
        queue.push(error.message); // Append the error message to the queue
    } finally {
        queue.push('Guardrail was processed'); // Always add this message
    }
    
    return queue; // Return the final queue
}

