// Abstract class representing a generic user
abstract class TempUser {
    // Constructor to initialize name and price properties
    constructor(public name: string, public price: number) {}

    // Abstract method to be implemented by derived classes
    abstract getNumber(): void;
}

// Derived class representing a phone user
class PhoneUser extends TempUser {
    // Additional property for phone name
    private phoneName: string;

    // Constructor initializes both parent and child properties
    constructor(name: string, price: number, phoneName: string) {
        // Pass name and price to the parent class constructor
        super(name, price);
        this.phoneName = phoneName;
    }

    // Implementation of the abstract method from TempUser
    getNumber(): void {
        console.log(`PhoneUser: ${this.name}, Phone: ${this.phoneName}`);
    }
}

// Example usage
const user = new PhoneUser("Adeel", 999.99, "iPhone 14");
user.getNumber(); // Output: PhoneUser: Adeel, Phone: iPhone 14


export{}