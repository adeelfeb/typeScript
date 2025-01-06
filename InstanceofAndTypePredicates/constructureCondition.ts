interface Animal {
    name: string;
    isCarnivour: boolean;
}

class MyPet implements Animal {
    public name: string;
    public isCarnivour: boolean;

    // Single constructor that can handle individual values or an object
    constructor(nameOrAnimal: string | Animal, isCarnivour?: boolean) {
        if (typeof nameOrAnimal === "string") {
            // If individual values are provided
            this.name = nameOrAnimal;
            this.isCarnivour = isCarnivour ?? false; // Default to false if undefined
        } else {
            // If an object is provided
            this.name = nameOrAnimal.name;
            this.isCarnivour = nameOrAnimal.isCarnivour;
        }
    }
}

// Example Usage
const lion = { name: "Leo", isCarnivour: true };
const goat = { name: "Billy", isCarnivour: false };

// Create instances using individual values
const pet1 = new MyPet("Tim", true);
console.log(`${pet1.name} is carnivorous: ${pet1.isCarnivour}`); // Output: Tim is carnivorous: true

// Create instances using an object
const pet2 = new MyPet(goat);
console.log(`${pet2.name} is carnivorous: ${pet2.isCarnivour}`); // Output: Billy is carnivorous: false
