// Instead of passing the name of a function as an argument to another function, 
// you can always pass a whole function instead
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}