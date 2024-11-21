let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    console.log(count);
};


/* let username = "per";
let message = "You have tree new notifications";
console.log(message + ", " +username + "!")

let messageToUser = message + ", " + username + "!";
console.log(messageToUser); */

/* let name = "Gabriel";
let greeting = "Hi, my name is ";

let myGreeting = greeting + name;
console.log(myGreeting); */

/* let points = 4;
let bonusPoints = "10";

let totalPoints = points + bonusPoints

console.log(totalPoints); */