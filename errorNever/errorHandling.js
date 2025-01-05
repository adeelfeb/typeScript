// This function takes a message and throws an error with that message
// It is typed with 'never' to indicate that the function will never return
function throwError(message) {
    throw new Error(message); // This will stop the execution of the function, hence 'never' is appropriate
}
// This function attempts to log a message and uses the throwError function to simulate an error
function handleError(isError) {
    if (isError) {
        throwError("An error occurred!"); // Calls the throwError function, which never returns
    }
    else {
        console.log("Everything is fine.");
    }
}
try {
    handleError(false); // This will throw an error, and the catch block will handle it
}
catch (e) {
    // Type narrowing using 'instanceof'
    if (e instanceof Error) {
        console.error(e.message); // Accessing the message after narrowing the type to Error
    }
    else {
        console.error("Unknown error");
    }
}
