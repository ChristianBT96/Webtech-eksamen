// FUNCTIONS IN JAVASCRIPT
// Arguments / parameters
// Return values
// Callback functions
// Loops

// 1. Arguments / parameters
// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function.
// Example (non arrow function):
function addTwoNumbers(a, b) {
    return a + b;
};
// a and b are the parameters
addTwoNumbers(2, 3); // 5
// 2 and 3 are the arguments
// Example (arrow function):
const addThreeNumbers = (a, b, c) => {
    return a + b + c;
};
addThreeNumbers(2, 3, 4); // 9

// 2. Return values
// A function can have an optional return statement.
// It is used to return a value from the function.
// This is necessary if you want to use the result of a function call in your code.
// Example (non arrow function):
function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
};
addFourNumbers(2, 3, 4, 5); // 14
// Example (arrow function):
const addFiveNumbers = (a, b, c, d, e) => {
    return a + b + c + d + e;
};
addFiveNumbers(2, 3, 4, 5, 6); // 20

// 3. Callback functions
// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.
// Example (non arrow function):
function addTwoNumbersAndThenMultiplyByThree(a, b, callback) {
    const result = a + b;
    return callback(result);
};
addTwoNumbersAndThenMultiplyByThree(2, 3, function (result) {
    return result * 3;
}); // 15

// Can also be seen in a .map() function:
const numbers = [1, 2, 3, 4, 5];
const numbersMapped = numbers.map((number) => {
    return number * 2;
});
console.log(numbersMapped) // [2, 4, 6, 8, 10]

// 4. Loops
// Loops can be used to iterate over arrays and objects.

// For loops are the most common type of loop.
// Example:
for (let i = 1; i <= 5; i++) {
    console.log(i);
};
// This will print 1, 2, 3 ,4 ,5

// For each loops are used to iterate over arrays.
// Example:
const numbersForEach = [1, 2, 3, 4, 5];
numbersForEach.forEach((number) => {
    console.log(number);
});
// This will print 1, 2, 3, 4, 5

// For in loops are used to iterate over objects.
// Example:
const object = {
    name: 'John',
    age: 20,
    country: 'Denmark'
};
for (let key in object) {
    console.log(key);
}
// This will print name, age, country

for (let value in object) {
    console.log(object[value]);
}
// This will print John, 20, Denmark

