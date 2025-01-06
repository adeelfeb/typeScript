var MyPet = /** @class */ (function () {
    // Single constructor that can handle individual values or an object
    function MyPet(nameOrAnimal, isCarnivour) {
        if (typeof nameOrAnimal === "string") {
            // If individual values are provided
            this.name = nameOrAnimal;
            this.isCarnivour = isCarnivour !== null && isCarnivour !== void 0 ? isCarnivour : false; // Default to false if undefined
        }
        else {
            // If an object is provided
            this.name = nameOrAnimal.name;
            this.isCarnivour = nameOrAnimal.isCarnivour;
        }
    }
    return MyPet;
}());
// Example Usage
var lion = { name: "Leo", isCarnivour: true };
var goat = { name: "Billy", isCarnivour: false };
// Create instances using individual values
var pet1 = new MyPet("Tim", true);
console.log("".concat(pet1.name, " is carnivorous: ").concat(pet1.isCarnivour)); // Output: Tim is carnivorous: true
// Create instances using an object
var pet2 = new MyPet(goat);
console.log("".concat(pet2.name, " is carnivorous: ").concat(pet2.isCarnivour)); // Output: Billy is carnivorous: false
