/**
 * Looping over an Array 
*/
const cars = ["BMW", "Volvo", "Mini"];

var text = "";
for (let x of cars) {
  text += x + " ";
}
console.log("text=", text);

/**
 * Looping over a String
 */
let language = "JavaScript";

text = "";
for (let x of language) {
    text += x + " ";
}
console.log("text=", text);