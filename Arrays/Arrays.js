// Creating an Array
const cars_0 = ["Saab", "Volvo", "BMW"];

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
// Using the JavaScript Keyword new
const cars_1 = new Array("Saab", "Volvo", "BMW");


// Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let toString = fruits.toString();

// Arrays are Objects
const person_0 = ["John", "Doe", 46];

const person = {firstName:"John", lastName:"Doe", age:46};
let firstName = person.firstName;

// Looping Array Elements
// Array.forEach() function
let text = "";
fruits.forEach(myFunction);
function myFunction(value) {
  text += value + " ";
}

// Adding Array Elements
fruits.push("Lemon");

fruits[fruits.length] = "Peach";

// Create undefined "holes" in fruits
fruits[fruits.length+10] = "Lemon";


// If you use named indexes, JavaScript will redefine the array to an object.
// After that, some array methods and properties will produce incorrect results.
const person_ = [];
person_["firstName"] = "John";
person_["lastName"] = "Doe";
person_["age"] = 46;
person_.length;     // Will return 0
person_[0];         // Will return undefined

// JavaScript new Array()
// These two different statements both create a new empty array
const points_a = new Array();
const points_b = [];

// Create an array with one element:
const points_a1 = [40];
// Create an array with 40 undefined elements:
const points_b1 = new Array(40);  

