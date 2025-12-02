/*
December 2 - Math Object Practice
What I learned from the video: Using Math.random() and Math.ceil().
*/

// Step 1: Generating a random decimal number between 0 and 0.99
let decimal = Math.random();
console.log("Random Decimal:", decimal);

// Step 2: Multiplying by 10 to make the number larger (between 0 and 9.99)
let multiplied = decimal * 10;
console.log("Multiplied by 10:", multiplied);

// Step 3: Rounding up with Math.ceil()
// Example: 0.0001 becomes 1, 2.99 becomes 3.
let roundedUp = Math.ceil(multiplied);
console.log("Rounded Up Integer:", roundedUp);

// Step 4: Concatenate them all in one line (Final example in the video)
// Generates a random integer between 1 and 10.
let randomInteger = Math.ceil(Math.random() * 10);
console.log("Random integer in one line:", randomInteger);
