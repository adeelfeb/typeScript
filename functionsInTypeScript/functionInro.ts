function addNum(numb1: number, numb2: number){
    return numb1 + numb2
    console.log("helloe there")
}

let varSum = addNum(4, 4)
console.log("The sum was", varSum)


//How to have default params in typescript

let getData = (name: string, age: number=18)=>{return name}


console.log("the data is", getData("adeel"))


// How to make default return for a fucntion in TypeScript that's like the best thing ever 

let getNumber = (var1: number=0, var2:number=0, var3: number = 0 ): number=>{
    return var1+var2+var3
}

console.log("the sum of vars is:", getNumber(2,3))