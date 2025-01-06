"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Mutable tuple
let tuple = ['hello', 42];
tuple.push('new value'); // This works, since it's a mutable array
//trying to push a boolean type
// tuple.push(true); //it threw an error
console.log(tuple); // ["hello", 42, "new value"]
// Immutable tuple
let readonlyTuple = ['hello', 42];
