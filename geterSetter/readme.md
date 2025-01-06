### README Content for the Code

# TypeScript Example: Getters, Setters, and Access Modifiers

This repository demonstrates the use of `getter`, `setter`, and access modifiers (`readonly`, `protected`, and `public`) in TypeScript. It also shows how inheritance allows subclasses to interact with `protected` properties.

## Features

1. **Access Modifiers**:
   - `readonly`: Properties that can only be assigned during initialization.
   - `protected`: Properties that can be accessed within the class and its subclasses.
   - `public`: Properties that are accessible anywhere.

2. **Getters and Setters**:
   - `get`: Allows controlled access to properties.
   - `set`: Allows controlled modification of properties.

3. **Inheritance**:
   - Demonstrates how subclasses can access and modify `protected` properties of a parent class.

## Code Explanation

### Classes
- **`Ideology`**:
  - Contains a `readonly` property (`mind`) that cannot be modified after initialization.
  - Provides a `protected` property (`_currentIdea`) that is accessible to subclasses.
  - Includes getters and setters for controlled access to the `_currentIdea` property.
  
- **`NewIdeology`**:
  - Subclass of `Ideology` that modifies `_currentIdea` using a method.

### Example Usage
- Create instances of `Ideology` and `NewIdeology`.
- Use getters and setters to interact with private and protected properties.
- Show how subclasses can access `protected` properties.

## Running the Code

1. Install TypeScript if it's not already installed:
   ```bash
   npm install -g typescript
   ```

2. Compile the TypeScript code:
   ```bash
   tsc
   ```

3. Run the compiled JavaScript file:
   ```bash
   node <output_file>.js
   ```

## Example Output
```
mystery
The name is Nietzsche
1
42
0
```

## Key Learnings
- Use `readonly` for properties that should not be modified after initialization.
- `protected` properties help enforce encapsulation while allowing subclass access.
- Getters and setters provide controlled access and modification of class properties.

