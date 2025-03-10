"use strict";
// Enum for User Roles
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Teacher"] = "Teacher";
    Role["Student"] = "Student";
})(Role || (Role = {}));
// Creating Users with different roles
const user1 = {
    name: "Alice",
    age: 30,
    role: Role.Admin
};
const user2 = {
    name: "Bob",
    age: 25,
    role: Role.Teacher
};
const user3 = {
    name: "Charlie",
    age: 20,
    role: Role.Student
};
// Function to display user information based on their role
function displayUserInfo(user) {
    console.log(`${user.name}, Age: ${user.age}, Role: ${user.role}`);
}
// Displaying users' information
displayUserInfo(user1); // Alice, Age: 30, Role: Admin
displayUserInfo(user2); // Bob, Age: 25, Role: Teacher
displayUserInfo(user3); // Charlie, Age: 20, Role: Student
