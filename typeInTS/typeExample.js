// Create an object with readonly properties
var person = {
    name: "John Doe",
    age: 30
};
// person.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property
// person.age = 31;         // Error: Cannot assign to 'age' because it is a read-only property
console.log(person); // { name: "John Doe", age: 30 }
