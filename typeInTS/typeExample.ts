// Defining a type with readonly properties
type Person = {
    readonly name: string; // This property cannot be changed after initialization
    readonly age: number;  // This property also cannot be changed
    isStudent?: boolean // this ? allows it to be optional
  };
  
  // Create an object with readonly properties
  const person: Person = {
    name: "John Doe",
    age: 30
  };
  
//   person.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property
  // person.age = 31;         // Error: Cannot assign to 'age' because it is a read-only property
  
  console.log(person); // { name: "John Doe", age: 30 }
  