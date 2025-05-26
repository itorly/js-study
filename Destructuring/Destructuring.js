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

// 1.2 Object Property Alias
// Create an Object
const person_2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName : lname} = person_2;
console.log(lname);

// 2. String Destructuring
// Create a String
let name_str = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name_str;

// 3. Array Destructuring
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;

// 3.1 Skipping Array Values
// Create an Array

// Destructuring
let [fruit3,,,fruit4] = fruits;

// 3.2 Array Position Values
// Destructuring
let {[0]:fruit5 ,[1]:fruit6} = fruits;

// 4. The Rest Property
// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers

// 5. Destructuring Maps
// Create a Map
const fruit_map = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Destructing
let text = "";
for (const [key, value] of fruit_map) {
  text += key + " is " + value;
}

// 6. Swapping JavaScript Variables
let firstName_3 = "John";
let lastName_3 = "Doe";

// Destructing
[firstName_3, lastName_3] = [lastName_3, firstName_3];