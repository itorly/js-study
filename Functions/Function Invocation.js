// 1.Invoking a Function as a Function
function myFunction1(a, b) {
  return a * b;
}
let z1 = myFunction1(10, 2);           // Will return 20

// 2.The Global Object

// In a web browser the global object is the browser window.
// This example returns the window object as the value of this:
let z2 = myFunction2();            // x will be the window object

function myFunction2() {
  return this;
}


// 3.Invoking a Function as a Method
const myObject1 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
let z3 = myObject1.fullName();         // Will return "John Doe"

const myObject2 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this;
  }
}

// This will return [object Object] (the owner object)
let z4 = myObject2.fullName();


// 4.Invoking a Function with the Constructor
// This is a function constructor:
function myFunction3(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction3("John", "Doe");

// This will return "John"
let z5 = myObj.firstName;
