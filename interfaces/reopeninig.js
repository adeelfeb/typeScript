"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    email: "joe@example.com",
    age: 30,
    dbId: "12345",
    getFullName: () => {
        return "Joe Doe";
    }
};
console.log(user.getFullName()); // Output: "Joe Doe"
