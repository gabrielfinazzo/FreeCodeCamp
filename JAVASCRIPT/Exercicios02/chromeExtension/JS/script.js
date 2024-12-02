// 1º Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// 2. Create two variables:
// myLeads -> should be assignet to an empty array
// inputEl -> should be assognet to the text input field

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    console.log(myLeads);
});

// log out the items in the myLeads array using a for loop
for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
};

