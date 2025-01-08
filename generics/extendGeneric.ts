function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  // Example usage:
  
  const person = {
    name: "John",
    age: 30,
    isAdmin: true,
  };
  
  // Retrieve values using the generic function
  const name = getValue(person, "name"); // Type: string
  const age = getValue(person, "age"); // Type: number
  const isAdmin = getValue(person, "isAdmin"); // Type: boolean
  
  console.log(name); // Output: "John"
  console.log(age);  // Output: 30
  console.log(isAdmin); // Output: true
  








// Generic with a default type of 'string'




class DataStore<T = string> {
    private data: T[] = [];
  
    addItem(item: T): void {
      this.data.push(item);
    }
  
    getItems(): T[] {
      return this.data;
    }
  }
  
  // Using the generic with the default type
  const stringStore = new DataStore();
  stringStore.addItem("Hello");
  stringStore.addItem("World");
//   console.log(stringStore.getItems()); // Output: ["Hello", "World"]
  
  // Using the generic with an explicit type
  const numberStore = new DataStore<number>();
  numberStore.addItem(42);
  numberStore.addItem(73);
//   console.log(numberStore.getItems()); // Output: [42, 73]
  

  function processArray1<T>(items: T[]): T[] {
    // return items.map(item => item); // Simply returning the array after processing
    return items
  }
  function processArray<T>(items: T[]): T[] {
    return items.map(item => {
      if (typeof item === "string") {
        return (item.toUpperCase() as T); // Process strings
      }
      if (typeof item === "number") {
        return ((item * 2) as T); // Process numbers
      }
      return item; // Fallback
    });
  }
  
  const mixedArray: (string | number)[] = [1, "hello", 2, "world"];
  const processedMixedArray = processArray(mixedArray);
  
//   console.log(processedMixedArray); // Output: [2, "HELLO", 4, "WORLD"]
  
  
  export{}