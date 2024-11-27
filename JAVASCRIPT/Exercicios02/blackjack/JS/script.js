// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 10//parseInt(Math.random() * 10 + 2);
let secondCard = 4//parseInt(Math.random() * 10 + 2);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//let sumEl = document.querySelector(".sum-el");

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame();
};

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
        message = "You've got Blackjack! ";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! ";
        isAlive = false;
    };
    
    messageEl.textContent = message;
};

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 8; //parseInt(Math.random() * 10 + 2);
    sum += card
    // Push the card to the cards array
    cards.push(card);
    console.log(cards);
    renderGame();
};






// CASH OUT!
//console.log(hasBlackJack);
//console.log(isAlive)