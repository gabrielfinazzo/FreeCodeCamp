/* let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
};

console.log(course.tags); */

//EX:01

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array.
// Log out at least two of the keys using the dot notation.


/* let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/castle2.png"]
};

console.log(castle.price);
console.log(castle.isSuperHost); */

//EX: 02
// Create a person object that contains three keys: name, age, and country
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

/* let person = {
    name: "Gabriel",
    age: 26,
    country: "Brasil"
};

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
};

logData(); */


//EX: 03

/* let age = 8;
let discount; */
// less than 6 years old -> Free
// 6 to 17 years old -> Child discount
// 18 to 26 years old -> Student discount
// 27 to 66 years old -> full price
// over 66 years old -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

/* if (age < 6) {
    discount = "Free";
} else if (age <= 17) {
    discount = "Child discount";
} else if (age <= 26) {
    discount = "Student discount";
} else if (age <= 66) {
    discount = "Full price";
} else {
    discount = "Senior citizen discount";
};

console.log(discount); */

// EX: 04

//let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world
- China
- India
- United States
- Indonesia
- Pakistan
*/
/* console.log("The 5 largest countries in the world by population: ")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}; */


// EX: 05

//let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places
// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift().
/* largeCountries.pop();
largeCountries.push("Pakistan")
largeCountries.shift();
largeCountries.unshift("China");
console.log(largeCountries);
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}; */

// EX: 06

/* let dayOfMonth = 13;
let weekday = "Friday";

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱");
}; */

// EX: 07

/* let hands = ["rock", "papper", "scissor"];

// Create a function that returns a random item from the array

function randomItem() {
    let random = Math.floor(Math.random() * 3);
    return hands[random];
};

console.log(randomItem()); */

// EX: 08

let fruit = ["🍎", "🍊","🍎","🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property

function putOnShelf() {
    for (let a = 0;a < fruit.length; a++) {
        if (fruit[a] === "🍎") {
            appleShelf.textContent += "🍎 ";
        } else {
            orangeShelf.textContent += "🍊 ";
        };
    };
};

putOnShelf();