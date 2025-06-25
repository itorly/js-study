// 1.The JavaScript apply() Method
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
let fullName_person1 = person.fullName.apply(person1);

// The Difference Between call() and apply()
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// 2.The apply() Method with Arguments
const person_args = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person_args1 = {
  firstName:"John",
  lastName: "Doe"
}

let fullName_person_args1 = person_args.fullName.apply(person_args1, ["Oslo", "Norway"]);


// 3.Simulate a Max Method on Arrays
let maxNum = Math.max.apply(null, [1,2,3]); // Will also return 3

let maxNum2 = Math.max.apply(Math, [1,2,3]); // Will also return 3

let maxNum3 = Math.max.apply(" ", [1,2,3]); // Will also return 3

let maxNum4 = Math.max.apply(0, [1,2,3]); // Will also return 3
