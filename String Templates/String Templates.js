// Back-Tics Syntax
console.log('# 1.Back-Tics Syntax')
let text = `Hello World!`;
console.log('text=', text);

// Quotes Inside Strings
console.log('# 2.Quotes Inside Strings')
text = `He's often called "Johnny"`;
console.log('text=', text);

// Multiline Strings
console.log('# 3.Multiline Strings')
text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log('text=', text);

// Interpolation
console.log('# 4.Interpolation')
// Variable Substitutions
console.log('# 4.1.Variable Substitutions')
let firstName = "John";
let lastName = "Doe";

text = `Welcome ${firstName}, ${lastName}!`;

console.log('text=', text);


// Expression Substitutions
console.log('# 4.2.Expression Substitutions')
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log('total=', total);