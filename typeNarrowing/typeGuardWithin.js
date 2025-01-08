"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDetails(person) {
    if ("role" in person) {
        // TypeScript infers 'person' as Admin here
        return "Admin Role: ".concat(person.role, ", Permissions: ").concat(person.permissions.join(", "));
    }
    else {
        // TypeScript infers 'person' as User here
        return "User Name: ".concat(person.name, ", Email: ").concat(person.email);
    }
}
// Usage
var admin = { role: "Manager", permissions: ["read", "write", "execute"] };
var user = { name: "John Doe", email: "john@example.com" };
console.log(getDetails(admin)); // Output: Admin Role: Manager, Permissions: read, write, execute
console.log(getDetails(user)); // Output: User Name: John Doe, Email: john@example.com
