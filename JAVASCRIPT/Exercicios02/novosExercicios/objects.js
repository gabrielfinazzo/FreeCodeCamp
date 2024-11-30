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