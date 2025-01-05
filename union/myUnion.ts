type Car = {
    make: string;
    model: string;
  };
  
  type Truck = {
    make: string;
    capacity: number; // carrying capacity in tons
  };
  
  type Vehicle = Car | Truck;
  
  const myCar: Vehicle = {
    make: "Toyota",
    model: "Corolla",
  };
  
  const myTruck: Vehicle = {
    make: "Ford",
    capacity: 5,
  };
  
  console.log(myCar);
  console.log(myTruck);
  



  // A function that accepts a parameter of type string or number
function displayInfo(input: string | number): void {
    if (typeof input === "string") {
      console.log("Input is a string: " + input);
    } else {
      console.log("Input is a number: " + input);
    }
  }
  
  displayInfo("Hello, TypeScript!"); // Output: Input is a string: Hello, TypeScript!
  displayInfo(100); // Output: Input is a number: 100
  



  let mixedArray: (string | number)[] = ["Hello", 42, "World", 100];

// You can access values in the array and the type will be either string or number
mixedArray.forEach(item => {
  if (typeof item === "string") {
    console.log("String item: " + item);
  } else {
    console.log("Number item: " + item);
  }
});
