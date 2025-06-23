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

