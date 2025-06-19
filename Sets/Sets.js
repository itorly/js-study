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