"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
// Generic function that accepts an argument of any type and returns it
function identity(arg) {
    return arg;
}
// Usage examples:
// Using the function with a string type
var stringResult = identity("Hello, TypeScript!");
console.log(stringResult); // Output: Hello, TypeScript!
// Using the function with a number type
var numberResult = identity(42);
console.log(numberResult); // Output: 42
// Using the function with an array type
var arrayResult = identity([1, 2, 3]);
console.log(arrayResult); // Output: [1, 2, 3]
