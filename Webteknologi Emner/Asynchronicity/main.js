// ASYNCHRONICITY
// 1. Callback function
// 2. fetch, setTimeout

// 1. Callback function
// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

// Example:
// Creating an array of names.
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
// forEach example:
names.forEach(function (name) {
    console.log(name);
});
// This will print all the names in the array.
// forEach takes a callback function as an argument.

// Creating a function that takes an array and a callback function as arguments.
const myForEach = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};
// Using the function to print all the names in the array.
myForEach(names, (name) => {
    console.log(name);
});


// 2. fetch, setTimeout, addEventListener
// fetch
// fetch is a function that is used to make HTTP requests.
// It is used to get data from a server.
// Example:
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(Data => {
        console.log(Data);
    });
// fetch sends a request to the server and returns a promise.
// .then(response => response.json()) converts the response to JSON, so we can work with it in Javascript.
// .then(Data => { console.log(Data); }); logs the data to the console.

// Using fetch in a function requires the function to be asynchronous.
// This is done by adding async before the function name.



// setTimeout
// setTimeout is a function that is used to delay the execution of a function.
// Example:
function printHelloWorld() {
    console.log('Hello World');
}
setTimeout(printHelloWorld, 2000);
// This will print Hello World after 2 seconds.
