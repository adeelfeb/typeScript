# TypeScript Tuples

## Overview

In TypeScript, **tuples** are a special type of array that allow you to store a fixed number of elements, each of a specific type. Tuples are used when you need to store multiple values in a specific sequence, where each value can have a different type.

## Key Features of Tuples:

1. **Fixed Length**: A tuple has a fixed number of elements. For example, a tuple with 3 elements will always have 3 elements.
2. **Typed Elements**: Each element in a tuple can have a specific type. For instance, you can have a tuple with a string, a number, and a boolean.
3. **Sequence Order**: The order of elements in a tuple is significant. Each element's position in the tuple corresponds to its type.
4. **Optional Elements**: You can create tuples where some elements are optional. These elements may or may not be present.

## Example:

```typescript
// Tuple definition
let person: [string, number, boolean] = ['John', 30, true];

// Accessing tuple elements
console.log(person[0]); // "John"
console.log(person[1]); // 30
console.log(person[2]); // true
