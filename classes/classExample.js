"use strict";
class King {
    constructor(name, age, regime) {
        this.name = name;
        this.age = age;
        this.regime = regime;
    }
    display() {
        console.log(`King: ${this.name}, Age: ${this.age}, Regime: ${this.regime}`);
    }
}
let king1 = new King("King Leo", 45, "1821-432");
king1.display();
