class NewMen {
    constructor(public quality: string, public age: number) {}
  
    static getPersonQuality(person: NewMen): string {
      return `The quality at this age is ->> ${person.quality}`;
    }
  }
  
  // Usage
  const person = new NewMen("Hardworking", 30);
  console.log(NewMen.getPersonQuality(person)); // Output: The quality at this age is ->> Hardworking
  export{}