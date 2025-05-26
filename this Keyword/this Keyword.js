/**
 * this in a Method
 */
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

var fullName = person.fullName();
console.log("fullName=", fullName);
