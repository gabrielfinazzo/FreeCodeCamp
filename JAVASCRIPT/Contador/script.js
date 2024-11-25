let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let contStr = count + " - ";
    saveEl.textContent += contStr;
    countEl.textContent = 0;
    count = 0;
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