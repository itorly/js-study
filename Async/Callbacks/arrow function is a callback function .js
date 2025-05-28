// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call createArray with a callback
const posNumbers = createArray(myNumbers, (x) => x > 0);

// Keep only positive numbers
function createArray(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

console.log(posNumbers);