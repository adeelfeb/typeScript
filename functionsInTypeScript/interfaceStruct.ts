interface King {
  name: string;
  age: number;
  regime: string;
}

let object1: King = {
  name: "King Leo",
  age: 45,
  regime: "1821-432",
};

// Map over the object keys
Object.keys(object1).forEach((key) => {
  console.log(`${key}: ${(object1 as any)[key]}`);
});

// const objectArray = Object.entries(object1); // Converts to [["name", "King Leo"], ["age", 45], ["regime", "1821-432"]]

// const mapped = objectArray.map(([key, value]) => {
//   return `${key.toUpperCase()}: ${value}`;
// });

// console.log(mapped);
// Output: ["NAME: King Leo", "AGE: 45", "REGIME: 1821-432"]


export{}