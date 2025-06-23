// Default Parameters
function myFunction1(x, y) {
  if (y === undefined) {
    y = 2;
  }  
  return x * y;
}

let z1 = myFunction1(4);

// Default Parameter Values
function myFunction2(x, y = 10) {
  return x + y;
}
let z2 = myFunction2(5);

// Function Rest Parameter
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let z3 = sum(4, 9, 16, 25, 29, 100, 66, 77);

// The Arguments Object
let z4 = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

let z5 = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}