// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
console.log("1. part=" + part)

// the second parameter specifies the length of the extracted part
let str = "Apple, Banana, Kiwi";
part = str.substr(7, 6);

// To replace case insensitive, use a regular expression with an /i flag
text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log("2. newText=" + newText)

// To replace all matches, use a regular expression with a /g flag
text = "Please visit Microsoft and Microsoft!";
newText = text.replace(/Microsoft/g, "W3Schools");
console.log("3. newText=" + newText)

// If the separator is "", the returned array will be an array of single characters
split = text.split("")
console.log("4. text.split(\"\"): " + split)