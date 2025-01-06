type User = { id: number; name: string };
type Admin = { id: number; adminLevel: number };

function isAdmin(user: User | Admin): user is Admin { 
    return (user as Admin).adminLevel !== undefined; // Check for the 'adminLevel' property
}

function getUserInfo(user: User | Admin): string {
    if (isAdmin(user)) {
        return `Admin Level: ${user.adminLevel}`; // Narrowed to Admin
    }
    return `User Name: ${user.name}`; // Narrowed to User
}


interface Animal {
    name: string;
    isCarnivour: boolean;
}

const lion: Animal = {
    name: "Tim",
    isCarnivour: true,
};

const goat: Animal = {
    name: "Joe",
    isCarnivour: false,
};

class MyPet implements Animal {
    constructor(public name: string, public isCarnivour: boolean) {}
}

function checkPet(pet: MyPet): boolean {
    return pet.isCarnivour; // Check the boolean value directly
}

const newPet1 = new MyPet(goat.name, goat.isCarnivour);
const newPet2 = new MyPet(lion.name, lion.isCarnivour);

console.log(`Your pet ${newPet1.name} is carnivorous:`, checkPet(newPet1)); // Output: false
console.log(`Your pet ${newPet2.name} is carnivorous:`, checkPet(newPet2)); // Output: true

export {};
