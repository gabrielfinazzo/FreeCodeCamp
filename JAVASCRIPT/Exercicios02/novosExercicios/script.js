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

/* for (let count = 10; count > 0; count -= 1) {
    console.log(count);
}; */


//Ex: 06
// Create a for loop that counts from 10 to 100 in steps of 10
/* for (let i = 10; i < 101; i += 10) {
    console.log(i);
}; */


//Ex: 07
/* let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "New message"
];

let quantidade = messages.length
parseInt(quantidade);  */

//for (i = 0; i < /* quantidade */messages.length; i += 1) {
//    console.log(messages[i])
//};

//EX: 08

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

/* let cards = [7, 3, 9];

for (let i = 0; i < cards.length; i++ ) {
    console.log(cards[i]);
}; */


//EX 09:

/* let sentence = ["Hello", "my", "name", "is", "Gabriel"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
};
 */
// Render the sentence in the greetingEl paragraph using a for loop and .textContent

//EX: 10:

/* let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time;
    } else if (player2Time < player1Time) {
        return player2Time;
    } else {
        return player1Time;
    };
};

let fastestRace = getFastestRaceTime();
console.log(fastestRace); */

//EX: 11

// write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

/* let player1Time = 145;
let player2Time = 107;

function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalTime = getTotalRaceTime()

console.log(totalTime);
 */

/* let randomNumber = Math.random() * 6 + 1;
let floorNumber = Math.floor(randomNumber)
console.log(floorNumber); */

// 0, 1, 2, 3, 4, 5

//EX: 12

// Create a function, rollDice(), that returns a random number between 1 and 6

/* function rollDice() {
    let numbers = Math.floor(Math.random() * 6) + 1;
    return numbers
};

console.log(rollDice()); */

//EX: 13

/* let hasSolvedChallenge = false;
let hasHintsLeft = false;

function showSolution() {
    if (hasSolvedChallenge === false || hasHintsLeft === false) {
        console.log("Showing the solution...");
    };
};

showSolution() */

let likesDocumentaries = true;
let likesStartups = true;

function recommendMovie() {
    if (likesDocumentaries === true || likesStartups === true) {
        console.log("Hey, check out this new film we think you will like!")
    };
};

recommendMovie();