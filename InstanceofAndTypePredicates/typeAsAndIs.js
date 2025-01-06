"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAdmin(user) {
    return user.adminLevel !== undefined; // Check for the 'adminLevel' property
}
function getUserInfo(user) {
    if (isAdmin(user)) {
        return `Admin Level: ${user.adminLevel}`; // Narrowed to Admin
    }
    return `User Name: ${user.name}`; // Narrowed to User
}
const lion = {
    name: "Tim",
    isCarnivour: true,
};
const goat = {
    name: "Joe",
    isCarnivour: false,
};
class MyPet {
    constructor(name, isCarnivour) {
        this.name = name;
        this.isCarnivour = isCarnivour;
    }
}
function checkPet(pet) {
    return pet.isCarnivour; // Check the boolean value directly
}
const newPet1 = new MyPet(goat.name, goat.isCarnivour);
const newPet2 = new MyPet(lion.name, lion.isCarnivour);
console.log(`Your pet ${newPet1.name} is carnivorous:`, checkPet(newPet1)); // Output: false
console.log(`Your pet ${newPet2.name} is carnivorous:`, checkPet(newPet2)); // Output: true
