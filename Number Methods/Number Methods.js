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

// The toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals:
x = 9.656;
x.toFixed();  // returns 9
x.toFixed(2);  // returns 9.66
x.toFixed(4);  // returns 9.6560
x.toFixed(6);  // returns 9.656000

// The toPrecision() Method
// toPrecision() returns a string, with a number written with a specified length:
x = 9.656;
x.toPrecision();  // returns 9.656
x.toPrecision(2);  // returns 10
x.toPrecision(4);  // returns 9.6560
x.toPrecision(6);  // returns 9.656000
x.toPrecision(8);  // returns 9.65600000

// The valueOf() Method
// valueOf() returns a number as a number.
x = 123;    
y1 = x.valueOf();    
y2 = (123).valueOf();    
y3 = (100 + 23).valueOf();

// The Number() Method
// The Number() method can be used to convert JavaScript variables to numbers:
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");

// The Number() Method Used on Dates
Number(new Date("1970-01-01"))
Number(new Date("1970-01-02"))
Number(new Date("2017-09-30"))

// The parseInt() Method
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");

// The parseFloat() Method
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");

// The Number.isInteger() Method
Number.isInteger(10);
Number.isInteger(10.5);

// The Number.isFinite() Method
// The Number.isFinite() method returns true if the argument is not Infinity, -iInfinity, nor Nan.
Number.isFinite(123);     // true
Number.isFinite(Infinity);  // false

// The Number.isNaN() Method
// The Number.isNaN() method returns true if the argument is NaN (Not a Number).
Number.isNaN(10);       // false
Number.isNaN("10");     // false
Number.isNaN(NaN);      // true
Number.isNaN("NaN");    // false
Number.isNaN(undefined); // false