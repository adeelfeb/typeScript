// Example of using private, protected, and readonly in TypeScript

class Ideology {
    // `readonly` ensures that `mind` cannot be modified after initialization.
    readonly mind: string = "mystery"; // Type is inferred from the assigned value
  
    // `protected` allows this property to be accessed in the class and its subclasses.
    protected _currentIdea = 1;
  
    // Constructor to initialize `name` and `from` with public access modifiers.
    constructor(public name: string, public from: string) {}
  
    // Getter to access the `name` property.
    get getName(): string {
      return `The name is ${this.name}`;
    }
  
    // Getter to access the protected `_currentIdea` property.
    get getCurrentIdea(): number {
      return this._currentIdea;
    }
  
    // Setter to modify the `_currentIdea` property.
    set setCurrentIdea(newIdea: number) {
      this._currentIdea = newIdea;
    }
  }
  
  // Subclass extending the `Ideology` class.
  class NewIdeology extends Ideology {
    myName: string = "new";
  
    // Method to modify the protected `_currentIdea` property.
    removeIdeaCount() {
      this._currentIdea = 0; // `_currentIdea` is accessible because it's protected.
    }
  }
  
  // Creating an instance of `Ideology`.
  const philosophy = new Ideology("Nietzsche", "Übermensch");
  
  // Accessing a readonly property.
  console.log(philosophy.mind); // Output: mystery
  
  // Using the getter to access the `name` property.
  console.log(philosophy.getName); // Output: The name is Nietzsche
  
  // Using the getter and setter for `_currentIdea`.
  console.log(philosophy.getCurrentIdea); // Output: 1
  philosophy.setCurrentIdea = 42;
  console.log(philosophy.getCurrentIdea); // Output: 42
  
  // Creating an instance of `NewIdeology`.
  const newPhilosophy = new NewIdeology("Sartre", "Existentialism");
  
  // Modifying `_currentIdea` using the subclass method.
  newPhilosophy.removeIdeaCount();
  console.log(newPhilosophy.getCurrentIdea); // Output: 0
  
  export {};
  