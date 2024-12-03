// 1º Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// 2. Create two variables:
// myLeads -> should be assignet to an empty array
// inputEl -> should be assognet to the text input field

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    // Clear out the input field
    inputEl.value = "";
    // Call the renderLeads() function
    renderLeads();
});

// log out the items in the myLeads array using a for loop
// Render the leads in the unordered list using ulEl.textContent


function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a target='_blank' href='"+'https://'+myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        console.log(listItems);
        /* listItems += "<li>" + myLeads[i] + "</li>" */
        /* const li = document.createElement("li");
        li.textContent += myLeads[i];
        ulEl.append(li); */
    };

    ulEl.innerHTML = listItems;
};


