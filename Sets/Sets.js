// Create a Set
const letters_0 = new Set(["a","b","c"]);

// Create a Set
const letters = new Set();
// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

typeof letters;      // Returns object

letters instanceof Set;  // Returns true

let hasD = letters.has("d");

// The forEach() Method
// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})

// The values() Method
// Get all Values
const myIterator = letters.values();

// List all Values
let text_1 = "";
for (const entry of myIterator) {
  text_1 += entry;
}

// List all Values
let text_2 = "";
for (const entry of letters.values()) {
  text_2 += entry;
}

// The keys() Method
// Create an Iterator
const myIterator_key = letters.keys();

// List all Elements
let text_key = "";
for (const x of myIterator) {
  text_key += x;
}

// The entries() Method
// Get all Entries
const myIterator_entry = letters.entries();

// List all Entries
let text_entry = "";
for (const entry of myIterator) {
  text_entry += entry;
}