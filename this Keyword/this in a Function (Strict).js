/**
 * this in a Function (Strict)
 */
"use strict";
function myFunction2() {
  return this;
}
var thisInMyFunction2 = myFunction2;
console.log("thisInMyFunction2=", thisInMyFunction2);