console.log("teste")
// Use .innerHTML to render a Buy! button inside the div container

const container = document.querySelector(".container");
container.innerHTML = '<button onclick="buy()">Buy!</button>';

function buy() {
    container.innerHTML += '<p>Thank you for buying!</p>'
};