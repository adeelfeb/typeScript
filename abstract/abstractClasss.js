"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class representing a generic user
var TempUser = /** @class */ (function () {
    // Constructor to initialize name and price properties
    function TempUser(name, price) {
        this.name = name;
        this.price = price;
    }
    return TempUser;
}());
// Derived class representing a phone user
var PhoneUser = /** @class */ (function (_super) {
    __extends(PhoneUser, _super);
    // Constructor initializes both parent and child properties
    function PhoneUser(name, price, phoneName) {
        // Pass name and price to the parent class constructor
        var _this = _super.call(this, name, price) || this;
        _this.phoneName = phoneName;
        return _this;
    }
    // Implementation of the abstract method from TempUser
    PhoneUser.prototype.getNumber = function () {
        console.log("PhoneUser: ".concat(this.name, ", Phone: ").concat(this.phoneName));
    };
    return PhoneUser;
}(TempUser));
// Example usage
var user = new PhoneUser("Adeel", 999.99, "iPhone 14");
user.getNumber(); // Output: PhoneUser: Adeel, Phone: iPhone 14
