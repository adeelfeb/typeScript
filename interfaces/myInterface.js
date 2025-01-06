"use strict";
const Joe = {
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
};
console.log("The User is:", Joe.getFullName());
console.log("The Coupon is:", Joe.getCoupon("SAVE20"));
