// 1.The JavaScript call() Method
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
let fullName_person1 = person.fullName.call(person1);

// 2.The call() Method with Arguments
const person_args = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person_args1 = {
  firstName:"John",
  lastName: "Doe"
}

let fullName_person_args1 = person_args.fullName.call(person_args1, "Oslo", "Norway");

