"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = Object.assign(function (a, b) { return a + b; }, {
    description: "Adds two numbers",
});
console.log(add(3, 4)); // Output: 7
console.log(add.description); // Output: "Adds two numbers"
var add2 = Object.assign(function (a, b) { return a + b; }, {
    description: "Adds two numbers",
});
console.log(add2(3, 4)); // Output: 7
console.log(add2.description); // Output: "Adds two numbers"
