"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class representing a generic user
class TempUser {
    // Constructor to initialize name and price properties
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
// Derived class representing a phone user
class PhoneUser extends TempUser {
    // Constructor initializes both parent and child properties
    constructor(name, price, phoneName) {
        // Pass name and price to the parent class constructor
        super(name, price);
        this.phoneName = phoneName;
    }
    // Implementation of the abstract method from TempUser
    getNumber() {
        console.log(`PhoneUser: ${this.name}, Phone: ${this.phoneName}`);
    }
}
// Example usage
const user = new PhoneUser("Adeel", 999.99, "iPhone 14");
user.getNumber(); // Output: PhoneUser: Adeel, Phone: iPhone 14
