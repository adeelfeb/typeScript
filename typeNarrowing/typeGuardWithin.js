"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDetails(person) {
    if ("role" in person) {
        // TypeScript infers 'person' as Admin here
        return `Admin Role: ${person.role}, Permissions: ${person.permissions.join(", ")}`;
    }
    else {
        // TypeScript infers 'person' as User here
        return `User Name: ${person.name}, Email: ${person.email}`;
    }
}
// Usage
const admin = { role: "Manager", permissions: ["read", "write", "execute"] };
const user = { name: "John Doe", email: "john@example.com" };
console.log(getDetails(admin)); // Output: Admin Role: Manager, Permissions: read, write, execute
console.log(getDetails(user)); // Output: User Name: John Doe, Email: john@example.com
function getData() {
    return "This is a string";
}
const str = getData(); // Asserting 'unknown' as 'string'
console.log(str.toUpperCase()); // Output: THIS IS A STRING
