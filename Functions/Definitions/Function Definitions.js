// Function Declarations
function myFunction(a, b) {
  return a * b;
}

let x1 = myFunction(4, 3);

// Function Expressions
const x2 = function (a, b) {return a * b};

let z = x2(4, 3);

// The Function() Constructor
const myFunction = new Function("a", "b", "return a * b");

let x3 = myFunction(4, 3);

const myFunction1 = function (a, b) {return a * b};

let x4 = myFunction1(4, 3);