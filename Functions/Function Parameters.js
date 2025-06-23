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
