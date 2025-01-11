let str = "hello there";

let str2 = ""

let str3 = str.split()
let str5 = str3.reverse()
let str4 = str3.join("")

for (let index = str.length-1; index >= 0; index--) {
    str2 += str[index]
    
}
const array = [str]

console.log("new string:", str5)
console.log("new string:", str3)
console.log("new string:", str4)
console.log("new string:", array)