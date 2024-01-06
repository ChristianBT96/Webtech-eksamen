// Create a function called waiter that takes number of seconds to wait

const waiter = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Done waiting for ${seconds} seconds`);
        }, seconds * 1000);
    });
}

waiter(3).then((result) => {
    console.log(result);
});



// Promise with reject
// const waiter = (seconds) => {
//     return new Promise((resolve, reject) => {
//         if (seconds > 0) {
//             setTimeout(() => {
//                 resolve(`Done waiting for ${seconds} seconds`);
//             }, seconds * 1000);
//         } else {
//             reject("Invalid time, seconds should be greater than 0");
//         }
//     });
// };
//
// // Example usage with both resolve and reject
// waiter(3)
//     .then((result) => {
//         console.log(result); // Resolved case
//     })
//     .catch((error) => {
//         console.error(error); // Rejected case
//     });
//
// // Example with invalid time (reject)
// waiter(0)
//     .then((result) => {
//         console.log(result); // This won't be executed
//     })
//     .catch((error) => {
//         console.error(error); // Error message will be logged
//     });


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
}

// Creating instances using the constructor
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

// Accessing properties and methods
console.log(person1.name); // Alice
person2.sayHello(); // Hello, my name is Bob and I'm 30 years old.

console.log(person1 instanceof Array);
