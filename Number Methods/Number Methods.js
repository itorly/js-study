// The toString() Method
let x = 123;
let y1 = x.toString();  // y1 = "123"
let y2 = (123).toString();  // y2 = "123"
let y3 = (100 + 23).toString();  // y3 = "123"
// The toString() method can take an optional radix argument to convert the number to a different base:
let text = x.toString(2);  // text = "1111011"

// The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.

// A parameter defines the number of characters behind the decimal point:
x = 9.656;
x.toExponential();  // returns 9.656e+0
x.toExponential(2);  // returns 9.66e+0
x.toExponential(4);  // returns 9.6560e+0
x.toExponential(6);  // returns 9.656000e+0