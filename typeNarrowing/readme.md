### **Type Narrowing in TypeScript**

**Type narrowing** is the process of refining a variable's type to a more specific one based on runtime checks or logic. TypeScript's type system uses **control flow analysis** to infer and narrow down the possible types of a variable, making your code safer and more predictable.

---

### **Examples of Type Narrowing**

#### 1. **Narrowing for `null`**
TypeScript distinguishes between `null` and other types, so you can use runtime checks to ensure safety when handling `null`.

```typescript
function processValue(value: string | null): string {
    if (value === null) {
        return "Default Value"; // Handle the null case
    }
    return value.toUpperCase(); // Narrowed to string
}
```

- **Explanation**: The check `value === null` narrows the type to `null`, and the `else` block narrows it to `string`.
- **Business Case**: Useful for handling optional fields in forms or APIs where some values might be missing (`null`).

---

#### 2. **Narrowing for Arrays as Objects**
You can narrow down arrays by checking their properties or length.

```typescript
function isNonEmptyArray(arr: any[]): boolean {
    if (arr.length > 0) {
        return true; // Narrowed to non-empty array
    }
    return false; // Empty array case
}
```

- **Explanation**: The `arr.length > 0` condition ensures the array is non-empty, narrowing its possible state.
- **Business Case**: Useful for validating data sets before processing, such as ensuring there are records to display in a table or chart.

---

#### 3. **Narrowing for Objects**
Use type guards to determine if a variable is of a specific object shape.

```typescript
type User = { id: number; name: string };
type Admin = { id: number; adminLevel: number };

function isAdmin(user: User | Admin): user is Admin {
    return (user as Admin).adminLevel !== undefined; // Check for the 'adminLevel' property
}

function getUserInfo(user: User | Admin): string {
    if (isAdmin(user)) {
        return `Admin Level: ${user.adminLevel}`; // Narrowed to Admin
    }
    return `User Name: ${user.name}`; // Narrowed to User
}
```

- **Explanation**: The custom type guard `isAdmin` checks for a distinguishing property (`adminLevel`), narrowing the type to `Admin`.
- **Business Case**: Useful in role-based access control systems, where user roles and permissions vary based on their type.

---

#### 4. **Narrowing for Empty Strings**
Empty strings (`""`) can be narrowed using strict equality checks.

```typescript
function processInput(input: string): string {
    if (input === "") {
        return "No input provided"; // Handle empty string case
    }
    return `Input: ${input}`; // Narrowed to non-empty string
}
```

- **Explanation**: The condition `input === ""` narrows the type to an empty string, and the `else` block handles non-empty strings.
- **Business Case**: Common in form validation to check if required fields are left blank.

---

#### 5. **Narrowing for `undefined`**
TypeScript allows narrowing `undefined` using checks like `!== undefined`.

```typescript
function getUserId(user: { id?: number }): string {
    if (user.id === undefined) {
        return "ID not available"; // Handle undefined case
    }
    return `User ID: ${user.id}`; // Narrowed to number
}
```

- **Explanation**: The `user.id === undefined` check ensures that `id` is handled safely when it might not exist.
- **Business Case**: Useful for handling optional properties in API responses or configurations.

---

### **How Type Narrowing is Used in Business Cases**

1. **Error Handling**:
   - **Null and Undefined**: Ensures that code gracefully handles cases where data might be missing or unavailable, preventing runtime errors.
   - Example: Default values in forms or API responses.

2. **Data Validation**:
   - **Arrays and Objects**: Validate incoming data structures to ensure they're in the expected format before processing.
   - Example: Checking if an array has records before rendering a report.

3. **Role-Based Logic**:
   - **Objects**: Dynamically determine the type of a user or entity (e.g., Admin vs. User) to apply different business logic.
   - Example: Admins can manage users, while regular users can only view data.

4. **Form Inputs**:
   - **Empty Strings**: Validate that required fields in a form are not left blank, improving user experience.
   - Example: Prevent submission of incomplete forms.

---

### **Can Type Narrowing Be Used in Plain JavaScript?**

- **Type narrowing as a concept** is present in JavaScript but without type safety, as JavaScript doesn't have a type system.
- You can use runtime checks like `typeof`, `instanceof`, or property checks, but they won't provide compile-time guarantees.
- Example in plain JavaScript:
    ```javascript
    function processValue(value) {
        if (value === null) {
            return "Default Value";
        }
        if (typeof value === "string") {
            return value.toUpperCase();
        }
        return "Invalid value";
    }
    ```

- **Key Difference**: In TypeScript, the compiler enforces type safety and uses control flow analysis to infer types automatically. In JavaScript, you rely solely on runtime checks.

--- 

