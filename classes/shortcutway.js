"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Implementing the interface in the class
class User {
    constructor(username, password, // Constructor parameter
    createdAt) {
        this.username = username;
        this.createdAt = createdAt;
        this._password = password;
    }
    // Getter for password to allow controlled access to the private property
    get password() {
        return this._password;
    }
    display() {
        console.log(`Username: ${this.username}, Created At: ${this.createdAt}`);
    }
}
const user = new User("john_doe", "password123", new Date());
user.display();
class User2 {
    constructor(username, password, createdAt) {
        this.username = username;
        this.createdAt = createdAt;
        this._password = password;
    }
    getPassword() {
        return this._password;
    }
}
const user2 = new User2("john_doe", "password123", new Date());
console.log(user2.getPassword()); // Access via method
