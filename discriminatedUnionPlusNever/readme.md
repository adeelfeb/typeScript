### **Discriminated Unions with Default `never` in TypeScript**

A **discriminated union** in TypeScript is a pattern used to define a type that can be one of several different types, but with a distinguishing property (also known as a "discriminant"). This helps TypeScript understand which type is being worked with, based on the value of the discriminant, allowing for better type safety.

The `never` type is often used in these scenarios to handle **exhaustive checks** in switch-case or conditional statements. It ensures that all possible cases are covered, and if a value does not match any of the expected types, TypeScript will give an error.

---

### **Discriminated Union Example with Default `never`**

Let's say we are building a system where we need to validate different types of user input: `text`, `number`, and `boolean`. Each input type has different validation requirements.

#### **Step 1: Define the Discriminated Union Types**

We define the types using a **discriminant** (a property that identifies which type is being used) and then use a **`never` return type** in the default case of a switch statement to ensure all cases are handled.

```typescript
// Define input types
interface TextInput {
    type: "text";
    value: string;
}

interface NumberInput {
    type: "number";
    value: number;
}

interface BooleanInput {
    type: "boolean";
    value: boolean;
}

// Union type for all possible inputs
type UserInput = TextInput | NumberInput | BooleanInput;
```

- **Discriminant**: The `type` property in each interface (`"text"`, `"number"`, and `"boolean"`) serves as the discriminant.

#### **Step 2: Create the Validation Function Using a Switch Statement**

The `validateInput` function checks the `type` of each input and validates the `value` based on that type. In case of an unknown or unhandled type, we use `never` to ensure that all cases are covered.

```typescript
function validateInput(input: UserInput): boolean {
    switch (input.type) {
        case "text":
            // Text validation: must be a non-empty string
            return input.value.trim().length > 0;
        case "number":
            // Number validation: must be a positive number
            return !isNaN(input.value) && input.value > 0;
        case "boolean":
            // Boolean validation: must be true or false
            return typeof input.value === "boolean";
        default:
            // The 'never' type ensures that if an unknown 'type' is provided, an error will be thrown
            return assertNever(input);
    }
}

// Helper function for exhaustive check
function assertNever(input: never): never {
    throw new Error(`Unhandled input type: ${JSON.stringify(input)}`);
}
```

#### **Explanation**:
- The `validateInput` function handles each `type` of input individually in the `switch` statement.
- The **`never` type** is used in the `default` case of the `switch` statement through the `assertNever` function. This is a **type safety measure** that ensures all possible types are accounted for.
    - If a new type is added to the `UserInput` union but is not handled in the `switch`, TypeScript will give an error at compile time, prompting the developer to handle the new case.
    - The `assertNever` function throws an error when an unexpected case is encountered, providing a clear indication that something is wrong.

---

#### **Step 3: Test the Validation Function**

Now, let's test the validation with different types of input.

```typescript
const textInput: TextInput = { type: "text", value: "Hello" };
const numberInput: NumberInput = { type: "number", value: 42 };
const booleanInput: BooleanInput = { type: "boolean", value: true };

console.log(validateInput(textInput)); // true
console.log(validateInput(numberInput)); // true
console.log(validateInput(booleanInput)); // true

// Example of an unsupported input type (will throw an error due to 'never' type)
const unknownInput = { type: "unknown", value: "test" };
console.log(validateInput(unknownInput)); // Error: Unhandled input type: {"type":"unknown","value":"test"}
```

---

### **Summary of How `never` and Discriminated Unions Work Together**:

- **Discriminated Unions**: Allow us to define a type that can be one of several different types, each identified by a discriminant (e.g., `type: "text" | "number" | "boolean"`).
- **`never` Type**: Used in the `default` case of a `switch` statement (or other control flow) to ensure all possible cases are handled. It enforces exhaustive checks, causing a compile-time error if an unhandled case is encountered.
- **Exhaustive Check**: The `assertNever` function is a common pattern for handling exhaustive checks in a discriminated union, ensuring that if a new type is added to the union, it must be explicitly handled in the code.

---

### **Business Case**: Why Use `never` for Exhaustive Checks?

- **Type Safety**: Using the `never` type in the `default` case ensures that the developer handles all possible cases in the switch statement. If a new type is introduced to the union, TypeScript will flag it as an error if it's not handled.
- **Error Prevention**: It prevents unhandled edge cases or invalid data types from passing through the validation logic, reducing the chance of runtime errors.

This pattern is especially useful when dealing with large applications and complex data structures, as it enforces that all possible types are validated properly, making the code more robust and maintainable.