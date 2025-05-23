// # 1 with or without decimals
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals

// # 2 scientific (exponent) notation
x = 123e5;    // 12300000
y = 123e-5;   // 0.00123

// JavaScript Numbers are Always 64-bit Floating Point
// This format stores numbers in 64 bits, 
// where the number (the fraction) is stored in bits 0 to 51, 
// the exponent in bits 52 to 62, and the sign in bit 63
// Value (aka Fraction/Mantissa)	Exponent	        Sign
// 52 bits (0 - 51) 	            11 bits (52 - 62)	1 bit (63)

// # 3 Integer Precision
x = 999999999999999;   // x will be 999999999999999
y = 9999999999999999;  // y will be 10000000000000000

// # 4 Floating Precision
// Floating point arithmetic is not always 100% accurate:
let x = 0.2 + 0.1;
// To solve the problem above, it helps to multiply and divide:
let x = (0.2 * 10 + 0.1 * 10) / 10;

// # 5 Numeric Strings
let x = "100";
let y = "10";
var z = x / y;
z = x * y;
z = x - y;
// a string concatenation
z = x + y;

// # 6 NaN - Not a Number
let x = 100 / "Apple";  // NaN
isNaN(x);               // true
let x = 100 / "10";     // 10

let x = NaN;
let y = 5;
let z = x + y;  // NaN

let x = NaN;
let y = "5";
let z = x + y;  // "NaN5"

typeof NaN; // "number"

// # 7 Infinity
// Infinity (or -Infinity) is the value JavaScript will return 
// if you calculate a number outside the largest possible number.
var myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}

// Division by 0 (zero) also generates Infinity:
let x =  2 / 0; //  Infinity
let y = -2 / 0; //  -Infinity

typeof Infinity;    // "number"


// # 8 Hexadecimal
// JavaScript interprets numeric constants as hexadecimal 
// if they are preceded by 0x.
let x = 0xFF;   // 255

// Never write a number with a leading zero (like 07).
// Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

// By default, JavaScript displays numbers as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36.
let myNumber = 32;
myNumber.toString(36);  // "w"
myNumber.toString(32);  // "10"
myNumber.toString(16);  // "20"
myNumber.toString(12);  // "28"
myNumber.toString(10);  // "32"
myNumber.toString(8);   // "40"
myNumber.toString(2);   // "100000"
