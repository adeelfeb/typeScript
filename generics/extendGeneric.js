"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValue(obj, key) {
    return obj[key];
}
// Example usage:
var person = {
    name: "John",
    age: 30,
    isAdmin: true,
};
// Retrieve values using the generic function
var name = getValue(person, "name"); // Type: string
var age = getValue(person, "age"); // Type: number
var isAdmin = getValue(person, "isAdmin"); // Type: boolean
console.log(name); // Output: "John"
console.log(age); // Output: 30
console.log(isAdmin); // Output: true
// Generic with a default type of 'string'
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = [];
    }
    DataStore.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStore.prototype.getItems = function () {
        return this.data;
    };
    return DataStore;
}());
// Using the generic with the default type
var stringStore = new DataStore();
stringStore.addItem("Hello");
stringStore.addItem("World");
//   console.log(stringStore.getItems()); // Output: ["Hello", "World"]
// Using the generic with an explicit type
var numberStore = new DataStore();
numberStore.addItem(42);
numberStore.addItem(73);
//   console.log(numberStore.getItems()); // Output: [42, 73]
function processArray1(items) {
    // return items.map(item => item); // Simply returning the array after processing
    return items;
}
function processArray(items) {
    return items.map(function (item) {
        if (typeof item === "string") {
            return item.toUpperCase(); // Process strings
        }
        if (typeof item === "number") {
            return (item * 2); // Process numbers
        }
        return item; // Fallback
    });
}
var mixedArray = [1, "hello", 2, "world"];
var processedMixedArray = processArray(mixedArray);
