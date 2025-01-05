class King {
    name: string;
    age: number;
    regime: string;
  
    constructor(name: string, age: number, regime: string) {
      this.name = name;
      this.age = age;
      this.regime = regime;
    }
  
    display(): void {
      console.log(`King: ${this.name}, Age: ${this.age}, Regime: ${this.regime}`);
    }
  }
  
  let king1 = new King("King Leo", 45, "1821-432");
  king1.display();
  