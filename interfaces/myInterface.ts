interface User2 {
    email: string,
    age: number,
    houseAddress?: string,
    readonly dbId: string,
    getVideoDetails(): string,
    getCoupon(couponName: string): number
}

// Extending User2 interface to create a new interface with additional properties and methods
interface ExtendedUser extends User2 {
    phoneNumber: string;
    premiumMember: boolean;
    getFullName(): string; // New method
}

const Joe: ExtendedUser = {
    email: "h2asdr.com",
    age: 32,
    dbId: "684",
    houseAddress: "north south east west",
    phoneNumber: "123-456-7890",
    premiumMember: true,
    getFullName: () => {
        return "Joe Doe";
    },
    getVideoDetails: () => {
        return "Got it now";
    },
    getCoupon: () => {
        return 2;
    }
}

console.log("The User is:", Joe.getFullName());
console.log("The Coupon is:", Joe.getCoupon("SAVE20"));
