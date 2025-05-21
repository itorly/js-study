/**
 * indexOf
 */
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);
console.log("index=" + index);

/**
 * lastIndexOf
 */
// The lastIndexOf() methods searches backwards 
// (from the end to the beginning), meaning: 
// if the second parameter is 15, 
// the search starts at position 15, 
// and searches to the beginning of the string.
text = "Please locate where 'locate' occurs!";
let lastIndex = text.lastIndexOf("locate", 15);
console.log("lastIndex=" + lastIndex);

/**
 * search
 */
let search = text.search("locate");
console.log("search=" + search);

search = text.search(/locate/);
console.log("search=" + search);

/**
 * match
 */
text = "The rain in SPAIN stays mainly in the plain";
match = text.match("ain");
console.log("match=" + match);

match = text.match(/ain/);
console.log("match=" + match);

match = text.match(/ain/g);
console.log("match=" + match);

match = text.match(/ain/gi);
console.log("match=" + match);

/**
 * matchAll
 * matchAll() is an ES2020 feature.
 * matchAll() does not work in Internet Explorer.
 */
console.log("matchAll METHOD")
text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator_1 = text.matchAll("Cats");
array_1 = Array.from(iterator_1)
console.log("array_1=", array_1)

const iterator_2 = text.matchAll(/Cats/g);
array_2 = Array.from(iterator_2)
console.log("array_2=", array_2)

const iterator_3 = text.matchAll(/Cats/gi);
array_3 = Array.from(iterator_3)
console.log("array_3=", array_3)

/**
 * startsWith
 */
text = "Hello world, welcome to the universe.";
startsWith = text.startsWith("world", 6)
console.log("startsWith=" + startsWith);

/** 
 * endsWith 
 */
text = "Hello world, welcome to the universe.";
endsWith = text.endsWith("world", 11);
console.log("endsWith=" + endsWith);