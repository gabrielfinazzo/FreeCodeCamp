/* //Ex: 01
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
let age = 21;
// if less than 21 -> "You can not enter the club!"
// else -> "Welcom!"
if (age < 21) {
    console.log("You can not enter the club! ");
} else {
    console.log("Welcome!");
}; */



/* //Ex: 02
// Check if the person is elegible for a birthday card from the King! (100)
let age = 110;
// if less than 100 -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else -> "Not elegible, you have already gotten one"
if (age < 100) {
    console.log("Not elegible");
} else if (age === 100) {
    console.log("Here is your birthday card from the King!");
} else {
    console.log("Not elegible, you have already gotten one");
}; */

/* // Ex: 03
console.log(4 === 3); // false
console.log(5 > 2); // true
console.log(12 > 12); // false
console.log(3 < 0); // false
console.log(3 >= 3); // true
console.log(11 <= 11); // true
console.log(3 <= 2) // false */

// Arrays - ordered lists of items

/* let featuredPosts = ["Check out my Netflix clone", 
    "Here's the code for my project", 
    "I've just relaunched my portfolio"
];

console.log(featuredPosts.length);
 */


// Array - ordered list of items = composite / complex data type

//let me = ["Gabriel", 26, true];

/* let cards = [7, 4];
cards.push(6);
console.log(cards); */

//Ex: 04

// Push the newMessage to the messages array, and then log out the array

/* let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
];

let newMessage = "Same here!";
messages.push(newMessage);
console.log(messages.length);
console.log(messages);

// Remove last object
console.log(messages.pop());
console.log(messages);
 */

//Ex: 05 Count

//      START       FINISH      STEP SIZE
/* for (let count = 1; count < 21; count += 1) {
    console.log(count);
}; */

for (let count = 10; count > 0; count -= 1) {
    console.log(count);
};