"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var object1 = {
    name: "King Leo",
    age: 45,
    regime: "1821-432",
};
// Map over the object keys
Object.keys(object1).forEach(function (key) {
    console.log("".concat(key, ": ").concat(object1[key]));
});
