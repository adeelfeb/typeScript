"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = Object.assign((a, b) => a + b, {
    description: "Adds two numbers",
});
console.log(add(3, 4)); // Output: 7
console.log(add.description); // Output: "Adds two numbers"
const add2 = Object.assign((a, b) => a + b, {
    description: "Adds two numbers",
});
console.log(add2(3, 4)); // Output: 7
console.log(add2.description); // Output: "Adds two numbers"
