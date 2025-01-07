"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NewMen {
    constructor(quality, age) {
        this.quality = quality;
        this.age = age;
    }
    static getPersonQuality(person) {
        return `The quality at this age is ->> ${person.quality}`;
    }
}
// Usage
const person = new NewMen("Hardworking", 30);
console.log(NewMen.getPersonQuality(person)); // Output: The quality at this age is ->> Hardworking
