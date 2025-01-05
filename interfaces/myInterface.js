"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joe = {
    email: "h2asdr.com",
    age: 32,
    dbId: "684",
    houseAddress: "north south east west",
    getVideoDetails: function () {
        return "Got it now";
    },
    getCoupon: function () {
        return 2;
    }
};
console.log("the User is:", Joe.getVideoDetails());
console.log("the User is:", Joe.getCoupon(""));
