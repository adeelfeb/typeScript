// Defining the interface
interface IUser {
    username: string;
    password: string;  // Password defined as public in the interface
    createdAt: Date;
    display(): void;
}

// Implementing the interface in the class
class User implements IUser {
    private _password: string;  // Password is private in the class

    constructor(
        public username: string,
        password: string,  // Constructor parameter
        readonly createdAt: Date
    ) {
        this._password = password;
    }

    // Getter for password to allow controlled access to the private property
    get password(): string {
        return this._password;
    }

    display() {
        console.log(`Username: ${this.username}, Created At: ${this.createdAt}`);
    }
}

const user = new User("john_doe", "password123", new Date());
user.display();
// console.log(user.password);  // Accessing password through the getter

export {}