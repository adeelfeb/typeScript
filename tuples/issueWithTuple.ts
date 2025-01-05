// Mutable tuple
let tuple: [string, number] = ['hello', 42];
tuple.push('new value'); // This works, since it's a mutable array


//trying to push a boolean type
// tuple.push(true); //it threw an error
console.log(tuple); // ["hello", 42, "new value"]

// Immutable tuple
let readonlyTuple: readonly [string, number] = ['hello', 42];
// readonlyTuple.push('new value'); // Error: Property 'push' does not exist on type 'readonly [string, number]'


export{}