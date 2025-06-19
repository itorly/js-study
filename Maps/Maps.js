// How to Create a Map

// The new Map() Method
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let numOfApples = fruits.get("apples");
console.log("numOfApples", numOfApples);

// The set() Method
// Create a Map
const fruits_2 = new Map();

// Set Map Values
fruits_2.set("apples", 500);
fruits_2.set("bananas", 300);
fruits_2.set("oranges", 200);

let numOfApples_2 = fruits_2.get("apples");
console.log("numOfApples_2", numOfApples_2);

// Maps are Objects
// Returns object:
let type = typeof fruits;

// Returns true:
let instanceofMap = fruits instanceof Map;

// The size Property
// Returns the number of elements in a Map:
let size = fruits.size;