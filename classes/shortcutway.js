"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Implementing the interface in the class
var User = /** @class */ (function () {
    function User(username, password, // Constructor parameter
    createdAt) {
        this.username = username;
        this.createdAt = createdAt;
        this._password = password;
    }
    Object.defineProperty(User.prototype, "password", {
        // Getter for password to allow controlled access to the private property
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.display = function () {
        console.log("Username: ".concat(this.username, ", Created At: ").concat(this.createdAt));
    };
    return User;
}());
var user = new User("john_doe", "password123", new Date());
user.display();
console.log(user.password); // Accessing password through the getter
