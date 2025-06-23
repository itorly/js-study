// 1.Invoking a Function as a Function
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);           // Will return 20

// 2.The Global Object

// In a web browser the global object is the browser window.
// This example returns the window object as the value of this:
let x = myFunction();            // x will be the window object

function myFunction() {
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
myObject1.fullName();         // Will return "John Doe"

const myObject2 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this;
  }
}

// This will return [object Object] (the owner object)
myObject2.fullName();


// 4.Invoking a Function with the Constructor
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
myObj.firstName;
