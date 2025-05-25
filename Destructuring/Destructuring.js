// 1. Object Destructuring
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
var {firstName, lastName} = person;
console.log(firstName); // John
console.log(lastName); // Doe


// 1.1. Object Default Values
const person_1 = {
  firstName_1: "John",
  lastName_1: "Doe",
  age: 50
};
// Destructuring
let {firstName_1, lastName_1, country = "US"} = person_1;
console.log(country); // US
console.log(firstName_1); // John
console.log(lastName_1); // Doe