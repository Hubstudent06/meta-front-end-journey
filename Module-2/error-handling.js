/*
 Dec 23 - Simple Try-Catch Practice
*/

try {
    // We try to use a variable that doesn't exist
    console.log(user); 
} catch (err) {
    // The code jumps here instead of crashing
    console.log("Error caught!");
    console.log(err.message);
}

console.log("The program continues...");
