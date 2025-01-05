// Initial declaration of the interface
interface User {
    email: string;
    age: number;
}

// Reopening the interface to add new properties
interface User {
    houseAddress?: string;  // Optional property
    readonly dbId: string;  // Read-only property
}

// Reopening the interface again to add methods
interface User {
    getFullName(): string;
}

const user: User = {
    email: "joe@example.com",
    age: 30,
    dbId: "12345",
    getFullName: () => {
        return "Joe Doe";
    }
};

console.log(user.getFullName()); // Output: "Joe Doe"

export {}