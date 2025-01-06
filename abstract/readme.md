
# Abstract Classes in TypeScript

## Overview
Abstract classes in TypeScript serve as blueprints for other classes. They define common functionality and structure but cannot be instantiated directly. Instead, they are extended by derived classes, which must implement any abstract methods declared in the base class.

---

## Key Concepts

### 1. **What is an Abstract Class?**
An abstract class is a special type of class that may include:
- Concrete methods: Methods with full implementations.
- Abstract methods: Methods that only declare a signature and must be implemented by derived classes.

Syntax:
```typescript
abstract class ClassName {
    // Abstract method (must be implemented by child classes)
    abstract methodName(): void;

    // Concrete method (optional for child classes to override)
    methodName2(): void {
        console.log("This is a concrete method.");
    }
}
```

---

### 2. **Why Use Abstract Classes?**
Abstract classes are used when:
- You want to enforce a common structure or behavior across multiple related classes.
- Some functionality can be shared across all derived classes (through concrete methods).
- You need a mix of concrete and abstract methods.

---

### 3. **Key Features**
1. **Cannot be Instantiated**  
   Abstract classes cannot be instantiated directly. Attempting to do so will result in a compile-time error:
   ```typescript
   const instance = new AbstractClass(); // Error
   ```

2. **Abstract Methods**  
   These must be implemented in derived classes:
   ```typescript
   abstract getDetails(): void; // Declaration only
   ```

3. **Inheritance**  
   A derived class must provide implementations for all abstract methods.

---

## Example Code: Abstract Class in TypeScript

### Abstract Class Definition
```typescript
// Abstract base class
abstract class User {
    constructor(public name: string, public role: string) {}

    // Abstract method (must be implemented by child classes)
    abstract displayInfo(): void;

    // Concrete method
    logRole(): void {
        console.log(`${this.name} has the role of ${this.role}`);
    }
}
```

### Derived Class Implementation
```typescript
// Derived class extending the abstract base class
class AdminUser extends User {
    constructor(name: string, role: string, public permissions: string[]) {
        super(name, role);
    }

    // Implement the abstract method
    displayInfo(): void {
        console.log(`Admin: ${this.name}, Role: ${this.role}, Permissions: ${this.permissions.join(", ")}`);
    }
}
```

### Usage Example
```typescript
const admin = new AdminUser("Adeel", "Administrator", ["Read", "Write", "Delete"]);
admin.displayInfo(); // Output: Admin: Adeel, Role: Administrator, Permissions: Read, Write, Delete
admin.logRole();     // Output: Adeel has the role of Administrator
```

---

## Key Takeaways
1. **Abstract classes enforce structure:** Derived classes must adhere to the blueprint provided by the abstract class.
2. **Flexible implementation:** Abstract methods allow derived classes to provide specific implementations while sharing common functionality through concrete methods.
3. **Polymorphism:** Abstract classes can be used as references to derived class objects, promoting flexible code.

Example:
```typescript
let user: User; // Abstract class reference
user = new AdminUser("Adeel", "Administrator", ["Read", "Write", "Delete"]);
user.displayInfo(); // Works due to polymorphism
```

---

## Best Practices
1. Use abstract classes when there is a clear relationship between parent and child classes (e.g., `Animal` → `Dog`, `Cat`).
2. Combine abstract and concrete methods to reuse common functionality.
3. Avoid overusing abstract classes if simpler solutions (like interfaces) suffice.

---

## Abstract Classes vs Interfaces
| Feature                 | Abstract Classes                  | Interfaces                      |
|-------------------------|------------------------------------|----------------------------------|
| Instantiation           | Cannot be instantiated            | Cannot be instantiated          |
| Properties              | Can have concrete properties      | Cannot have concrete properties |
| Methods                 | Can have concrete and abstract    | Only abstract methods           |
| Multiple Inheritance    | Single inheritance only           | Can implement multiple          |

---

Abstract classes are a powerful feature of TypeScript, helping to enforce design consistency while providing flexibility in implementation.
