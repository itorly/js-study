// The JavaScript apply() Method
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

// The apply() Method with Arguments
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
