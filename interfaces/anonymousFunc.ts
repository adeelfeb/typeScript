interface Add {
    (a: number, b: number): number;
  }
  
  interface AdvancedAdd extends Add {
    description: string;
  }
  
  const add: AdvancedAdd = Object.assign((a:number, b: number) => a + b, {
    description: "Adds two numbers",
  });
  
  console.log(add(3, 4)); // Output: 7
  console.log(add.description); // Output: "Adds two numbers"

  
type Add2 = (a: number, b: number) => number;

type AdvancedAdd2 = Add2 & { description: string };

const add2: AdvancedAdd2 = Object.assign((a:number, b: number) => a + b, {
  description: "Adds two numbers",
});

console.log(add2(3, 4)); // Output: 7
console.log(add2.description); // Output: "Adds two numbers"


export {}