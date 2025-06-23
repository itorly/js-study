// Invoking a Function as a Function
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);           // Will return 20

// The Global Object

// In a web browser the global object is the browser window.
// This example returns the window object as the value of this:
let x = myFunction();            // x will be the window object

function myFunction() {
  return this;
}

// Invoking a Function as a Method
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();         // Will return "John Doe"