// # 1 JavaScript Integer Accuracy
// JavaScript can only safely represent integers:
// Up to 9007199254740991 +(2^53-1)
// and
// Down to -9007199254740991 -(2^53-1).
// Integer values outside this range lose precision.
var x = 999999999999999;
var y = 9999999999999999;

// # 2 How to Create a BigInt
// JavaScript will convert x to a regular number
let x = 9999999999999999; 
// append n to the end of an integer
let y = 9999999999999999n;

let x = 1234567890123456789012345n;
// call BigInt()
let y = BigInt(1234567890123456789012345)

// # 3 BigInt: A new JavaScript Datatype
let type = typeof y;

