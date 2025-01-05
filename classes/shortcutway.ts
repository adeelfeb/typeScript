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




type UserType = {
    username: string;
    readonly createdAt: Date;
    getPassword(): string;
};

class User2 implements UserType {
    private _password: string;

    constructor(
        public username: string,
        password: string,
        readonly createdAt: Date
    ) {
        this._password = password;
    }

    getPassword(): string {
        return this._password;
    }
}

const user2 = new User2("john_doe", "password123", new Date());
console.log(user2.getPassword()); // Access via method

export {}