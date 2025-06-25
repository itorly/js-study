// Function Borrowing
const person1 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member1 = {
  firstName:"Hege",
  lastName: "Nilsen",
}


let fullName = person1.fullName.bind(member1);

let z1 = fullName();

