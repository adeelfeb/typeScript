var King = /** @class */ (function () {
    function King(name, age, regime) {
        this.name = name;
        this.age = age;
        this.regime = regime;
    }
    King.prototype.display = function () {
        console.log("King: ".concat(this.name, ", Age: ").concat(this.age, ", Regime: ").concat(this.regime));
    };
    return King;
}());
var king1 = new King("King Leo", 45, "1821-432");
king1.display();
