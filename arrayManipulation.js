// Task 1:

// Function to process array
function processArray(numbers) {
    return numbers.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
}

let numbers = [1, 2, 3, 4, 5];
console.log('Task 1 Output: ', processArray(numbers));







