"use strict";
// Example of using private, protected, and readonly in TypeScript
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
var Ideology = /** @class */ (function () {
    // Constructor to initialize `name` and `from` with public access modifiers.
    function Ideology(name, from) {
        this.name = name;
        this.from = from;
        // `readonly` ensures that `mind` cannot be modified after initialization.
        this.mind = "mystery"; // Type is inferred from the assigned value
        // `protected` allows this property to be accessed in the class and its subclasses.
        this._currentIdea = 1;
    }
    Object.defineProperty(Ideology.prototype, "getName", {
        // Getter to access the `name` property.
        get: function () {
            return "The name is ".concat(this.name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ideology.prototype, "getCurrentIdea", {
        // Getter to access the protected `_currentIdea` property.
        get: function () {
            return this._currentIdea;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ideology.prototype, "setCurrentIdea", {
        // Setter to modify the `_currentIdea` property.
        set: function (newIdea) {
            this._currentIdea = newIdea;
        },
        enumerable: false,
        configurable: true
    });
    return Ideology;
}());
// Subclass extending the `Ideology` class.
var NewIdeology = /** @class */ (function (_super) {
    __extends(NewIdeology, _super);
    function NewIdeology() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myName = "new";
        return _this;
    }
    // Method to modify the protected `_currentIdea` property.
    NewIdeology.prototype.removeIdeaCount = function () {
        this._currentIdea = 0; // `_currentIdea` is accessible because it's protected.
    };
    return NewIdeology;
}(Ideology));
// Creating an instance of `Ideology`.
var philosophy = new Ideology("Nietzsche", "Übermensch");
// Accessing a readonly property.
console.log(philosophy.mind); // Output: mystery
// Using the getter to access the `name` property.
console.log(philosophy.getName); // Output: The name is Nietzsche
// Using the getter and setter for `_currentIdea`.
console.log(philosophy.getCurrentIdea); // Output: 1
philosophy.setCurrentIdea = 42;
console.log(philosophy.getCurrentIdea); // Output: 42
// Creating an instance of `NewIdeology`.
var newPhilosophy = new NewIdeology("Sartre", "Existentialism");
// Modifying `_currentIdea` using the subclass method.
newPhilosophy.removeIdeaCount();
console.log(newPhilosophy.getCurrentIdea); // Output: 0
