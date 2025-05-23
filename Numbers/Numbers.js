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