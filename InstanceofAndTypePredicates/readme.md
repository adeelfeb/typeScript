### **Instances and `typeof` in TypeScript**

In TypeScript, **instances** and the `typeof` operator are fundamental concepts used for type checking, narrowing, and ensuring runtime safety in JavaScript codebases. Here's a detailed explanation of each:

---

### **1. Instances in TypeScript**

#### **What is an Instance?**
An **instance** is an object created from a class using the `new` keyword. The instance has the properties and methods defined by the class and represents a specific realization of that class.

#### **Creating an Instance**

```typescript
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

const userInstance = new User("John Doe", 25); // Creating an instance
console.log(userInstance.greet()); // "Hello, my name is John Doe"
```

- **Explanation**:  
  - The class `User` defines a blueprint for creating objects.
  - The `userInstance` is a specific instance of the `User` class.

---

#### **Checking Instances with `instanceof`**

The `instanceof` operator checks whether an object is an instance of a specific class or its subclass.

```typescript
if (userInstance instanceof User) {
    console.log("userInstance is an instance of User");
}
```

- **How it Works**: 
  - `instanceof` checks the prototype chain of the object.
  - Returns `true` if the object's prototype chain contains the prototype of the specified class.

#### **Use Cases for Instances**
1. **Class-Based Type Checking**: 
   - Ensuring that a value is an instance of a class before accessing its properties or methods.
   - Example: Checking if a user is a type of `Admin` or `RegularUser`.

2. **Polymorphism**: 
   - Handling multiple classes with a shared interface.
   - Example: A function that works with different shapes (e.g., `Circle` and `Rectangle`) can check their type and apply specific logic.

```typescript
class Circle {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
}

class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

function printShapeInfo(shape: Circle | Rectangle) {
    if (shape instanceof Circle) {
        console.log(`Circle with radius: ${shape.radius}`);
    } else if (shape instanceof Rectangle) {
        console.log(`Rectangle with width: ${shape.width} and height: ${shape.height}`);
    }
}
```

---

### **2. The `typeof` Operator**

#### **What is `typeof`?**
The `typeof` operator is used to determine the **type of a value** at runtime. It returns a string that represents the type of the operand.

#### **Syntax**
```typescript
typeof operand;
```

#### **Basic Examples**
```typescript
console.log(typeof "hello"); // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);    // "object" (quirk of JavaScript)
console.log(typeof []);      // "object"
console.log(typeof {});      // "object"
console.log(typeof (() => {})); // "function"
```

---

#### **Using `typeof` for Type Narrowing**

The `typeof` operator can be used in **type guards** to narrow down types.

```typescript
function processValue(value: string | number): string {
    if (typeof value === "string") {
        return `String value: ${value.toUpperCase()}`; // Narrowed to string
    }
    return `Number value: ${value * 2}`; // Narrowed to number
}

console.log(processValue("hello")); // "String value: HELLO"
console.log(processValue(42));      // "Number value: 84"
```

- **Explanation**:
  - The `typeof` check refines the type of `value` to either `string` or `number`.
  - TypeScript uses **control flow analysis** to infer the narrowed type.

---

#### **Common Use Cases for `typeof`**
1. **Dynamic Input Handling**:
   - Handle inputs of different types in utility functions or APIs.
   - Example: Formatting string or number inputs for display.

2. **Runtime Type Checking**:
   - Validate data types before performing operations.
   - Example: Ensuring a variable is a `number` before performing arithmetic.

3. **Debugging**:
   - Print the runtime type of variables for debugging purposes.

---

#### **Comparison: `typeof` vs `instanceof`**

| Feature              | `typeof`                              | `instanceof`                        |
|----------------------|----------------------------------------|--------------------------------------|
| **Purpose**          | Checks primitive types or functions.  | Checks if an object is an instance of a class or subclass. |
| **Works With**       | `string`, `number`, `boolean`, etc.   | Objects and their classes.           |
| **Use Case**         | Type narrowing for primitives.        | Type narrowing for class instances.  |
| **Return Value**     | A string (`"string"`, `"number"`, etc.) | `true` or `false`.                   |

---

### **Can Instances and `typeof` Be Used in Plain JavaScript?**

Yes, both instances and `typeof` are available in plain JavaScript.

1. **`instanceof` in JavaScript**:
   ```javascript
   class User {}
   const user = new User();
   console.log(user instanceof User); // true
   ```

2. **`typeof` in JavaScript**:
   ```javascript
   console.log(typeof "hello"); // "string"
   console.log(typeof 42);      // "number"
   ```

---

### **Example: Using Both Together**
```typescript
function handleInput(input: string | number | User): string {
    if (typeof input === "string") {
        return `String: ${input}`;
    } else if (typeof input === "number") {
        return `Number: ${input}`;
    } else if (input instanceof User) {
        return `User Name: ${input.name}`;
    }
    return "Invalid Input";
}

const user = new User("Jane", 30);
console.log(handleInput("hello")); // "String: hello"
console.log(handleInput(42));      // "Number: 42"
console.log(handleInput(user));    // "User Name: Jane"
```

---

### **Key Takeaways**
- **`instanceof`** is used for **class-based type narrowing** and is ideal for working with objects created using classes.
- **`typeof`** is used for **primitive type narrowing** and works well for checking types like `string`, `number`, `boolean`, etc.
- Combining both allows robust runtime type checking and narrowing, making code safer and more maintainable.