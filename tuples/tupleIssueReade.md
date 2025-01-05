In TypeScript, **tuples** are special types of arrays that allow you to store elements of different types in a specific order. However, **tuples** in TypeScript are not completely immutable by default; they can still be modified by methods like `push()` or `pop()`, which are part of the array's prototype, even though their types are defined with specific lengths and types for each index.

The reason you can still modify the tuple with methods like `push()` is that TypeScript doesn't enforce strict immutability for tuples by default. While TypeScript checks the types and order of elements within the tuple, it doesn't restrict operations that can alter the structure of the tuple like regular array methods (such as `push()`, `pop()`, etc.). 

**The limitation here is that TypeScript allows these methods to work, but if you push an element that doesn't match the tuple's type definition, TypeScript will show an error.** For example, if a tuple is defined to contain only a string and a number, and you try to `push()` an object, TypeScript will catch this as an error.

If you want to prevent any modifications (like `push()`), you can make the tuple **readonly** by using the `readonly` modifier, which ensures that its elements cannot be changed after initialization.

### Example of Mutable and Immutable Tuples:

```typescript
// Mutable tuple
let tuple: [string, number] = ['hello', 42];
tuple.push('new value'); // This works, since it's a mutable array
console.log(tuple); // ["hello", 42, "new value"]

// Immutable tuple
let readonlyTuple: readonly [string, number] = ['hello', 42];
// readonlyTuple.push('new value'); // Error: Property 'push' does not exist on type 'readonly [string, number]'
```

### README Example:

## Tuples in TypeScript: Mutable vs Immutable

### Overview:
Tuples in TypeScript allow us to store fixed-size collections of elements where each element can have a different type. While tuples have an expected length and element types, they are not inherently immutable. We can modify a tuple's content using methods like `push()`, `pop()`, etc., unless we explicitly mark the tuple as `readonly`.

### Mutable Tuples:
Mutable tuples allow modifications, including adding new elements using array methods such as `push()`. 

Example:
```typescript
let tuple: [string, number] = ['hello', 42];
tuple.push('new value'); // This works
console.log(tuple); // ["hello", 42, "new value"]
```

### Immutable Tuples:
To prevent any modifications, we can make the tuple **readonly** using the `readonly` modifier. Once a tuple is marked as `readonly`, methods like `push()` or `pop()` will result in an error, ensuring that no changes can be made to the tuple's elements.

Example:
```typescript
let readonlyTuple: readonly [string, number] = ['hello', 42];
// readonlyTuple.push('new value'); // Error: Property 'push' does not exist
```

### Key Takeaways:
- By default, TypeScript allows you to modify tuples with array methods like `push()`, but you can only add elements that match the defined types of the tuple.
- To enforce immutability, use the `readonly` modifier when defining your tuple. This will prevent any changes to the tuple's length or elements.
- Immutable tuples are beneficial when you want to ensure that the data structure remains constant throughout the program.

This differentiation between mutable and immutable tuples allows you to decide whether you want to restrict or allow modifications to your data structures based on the use case.

