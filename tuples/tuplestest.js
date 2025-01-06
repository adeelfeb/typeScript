"use strict";
// Tuple in TypeScript: A tuple is an ordered collection of elements of different types
Object.defineProperty(exports, "__esModule", { value: true });
// Defining a tuple with 3 elements: a string, a number, and a boolean
let person = ['John', 30, true];
// Accessing elements from the tuple
console.log(person[0]); // John
console.log(person[1]); // 30
console.log(person[2]); // true
// Modifying values in the tuple
person[1] = 35; // Changing age
// Trying to change the type of an element will result in a TypeScript error
// person[0] = 123; // Error: Type 'number' is not assignable to type 'string'
// Tuples with optional elements
let contact = ['John', 1234567890]; // Can have 1 or 2 additional elements
// Accessing optional elements
console.log(contact[0]); // John
console.log(contact[1]); // 1234567890
console.log(contact[2]); // undefined (as it is optional)
// Tuple with different types, such as a mix of string, number, and object
let vehicle = ['Car', 4, { brand: 'Toyota', model: 'Corolla' }];
console.log(vehicle[0]); // Car
console.log(vehicle[2].brand); // Toyota
