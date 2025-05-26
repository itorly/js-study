/**
 * this in a Function (Default)
 */
function myFunction() {
  return this;
}
var thisInMyFunction = myFunction;
console.log("thisInMyFunction=", thisInMyFunction);