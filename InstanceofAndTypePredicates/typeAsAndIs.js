"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAdmin(user) {
    return user.adminLevel !== undefined; // Check for the 'adminLevel' property
}
function getUserInfo(user) {
    if (isAdmin(user)) {
        return "Admin Level: ".concat(user.adminLevel); // Narrowed to Admin
    }
    return "User Name: ".concat(user.name); // Narrowed to User
}
var lion = {
    name: "Tim",
    isCarnivour: true,
};
var goat = {
    name: "Joe",
    isCarnivour: false,
};
var MyPet = /** @class */ (function () {
    function MyPet(name, isCarnivour) {
        this.name = name;
        this.isCarnivour = isCarnivour;
    }
    return MyPet;
}());
function checkPet(pet) {
    return pet.isCarnivour; // Check the boolean value directly
}
var newPet1 = new MyPet(goat.name, goat.isCarnivour);
var newPet2 = new MyPet(lion.name, lion.isCarnivour);
console.log("Your pet ".concat(newPet1.name, " is carnivorous:"), checkPet(newPet1)); // Output: false
console.log("Your pet ".concat(newPet2.name, " is carnivorous:"), checkPet(newPet2)); // Output: true
