"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let object1 = {
    name: "King Leo",
    age: 45,
    regime: "1821-432",
};
// Map over the object keys
Object.keys(object1).forEach((key) => {
    console.log(`${key}: ${object1[key]}`);
});
