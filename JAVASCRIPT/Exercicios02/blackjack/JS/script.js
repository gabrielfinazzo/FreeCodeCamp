// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards


let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message;
let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//let sumEl = document.querySelector(".sum-el");

//Nome/Dinheiro -> Pontuação

let player = {
    name: "Gabriel",
    chips: 200,
};


let playerel = document.getElementById("player-el");
playerel.textContent = player.name + ": $" + player.chips;

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber
    };
};


// Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
};

function renderGame() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum;
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    };

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
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card
        cards.push(card);
        renderGame();
    };
};

