"use strict";
function addNum(numb1, numb2) {
    return numb1 + numb2;
    console.log("helloe there");
}
let varSum = addNum(4, 4);
console.log("The sum was", varSum);
//How to have default params in typescript
let getData = (name, age = 18) => { return name; };
console.log("the data is", getData("adeel"));
// How to make default return for a fucntion in TypeScript that's like the best thing ever 
let getNumber = (var1 = 0, var2 = 0, var3 = 0) => {
    return var1 + var2 + var3;
};
console.log("the sum of vars is:", getNumber(2, 3));
