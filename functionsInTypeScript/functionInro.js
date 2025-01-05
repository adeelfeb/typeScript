function addNum(numb1, numb2) {
    return numb1 + numb2;
    console.log("helloe there");
}
var varSum = addNum(4, 4);
console.log("The sum was", varSum);
//How to have default params in typescript
var getData = function (name, age) {
    if (age === void 0) { age = 18; }
    return name;
};
console.log("the data is", getData("adeel"));
// How to make default return for a fucntion in TypeScript that's like the best thing ever 
var getNumber = function (var1, var2, var3) {
    if (var1 === void 0) { var1 = 0; }
    if (var2 === void 0) { var2 = 0; }
    if (var3 === void 0) { var3 = 0; }
    return var1 + var2 + var3;
};
console.log("the sum of vars is:", getNumber(2, 3));
