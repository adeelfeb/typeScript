const score: Array<number> =[]


// Generic function that accepts an argument of any type and returns it
function identity<Type>(arg: Type): Type {
    return arg;
}

// Usage examples:

// Using the function with a string type
const stringResult = identity("Hello, TypeScript!");
console.log(stringResult); // Output: Hello, TypeScript!

// Using the function with a number type
const numberResult = identity(42);
console.log(numberResult); // Output: 42

// Using the function with an array type
const arrayResult = identity([1, 2, 3]);
console.log(arrayResult); // Output: [1, 2, 3]


// Generic component in JSX with a comma
// const Box = <T,>({ value }: { value: T }) => {
//     return <div>{value}</div>;
// }

// // Using the component with different types
// const numberBox = <Box value={123} />;
// const stringBox = <Box value="Hello, World!" />;

// console.log(numberBox);  // Type inferred as number
// console.log(stringBox);  // Type inferred as string


export{}