/**
 * The JavaScript for in statement 
 * loops through the properties of an Object
 */
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x] + " ";
}

console.log("text=", text);

/**
 * For In Over Arrays
 * The JavaScript for in statement can also 
 * loop over the properties of an Array
 */
const numbers = [45, 4, 9, 16, 25];

let txt = 0;
for (let x in numbers) {
  txt += numbers[x];
}
console.log("txt=", txt);

/**
 * Array.forEach()
 * 
 * Do not use for in over an Array if the index order is important.
 * 
 * The index order is implementation-dependent, 
 * and array values may not be accessed in the order you expect.
 * 
 * It is better to use a for loop, a for of loop, 
 * or Array.forEach() when the order is important.
 */

numbers = [45, 4, 9, 16, 25];

txt = 0;
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}

console.log("txt=", txt);

