## JavaScript Object Literal
An object literal is a list of name:value pairs inside curly braces {}.
```javascript
{
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
}
```
__Note:__
object literals are also called object initializers.

## Creating a JavaScript Object
```javascript
// Create an Object
const person_1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Create an Object
const person_2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create an Object
const person_3 = {};

// Add Properties
person_3.firstName = "John";
person_3.lastName = "Doe";
person_3.age = 50;
person_3.eyeColor = "blue";

// Using the new Keyword
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

```
**Note:** For readability, simplicity and execution speed, use the object literal method.

## Accessing Object Properties
```javascript
// objectName.propertyName
person.lastName;
// objectName["propertyName"]
person["lastName"];
```
## JavaScript Object Methods
```js
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
## In JavaScript, almost "everything" is an object.

All JavaScript values, except primitives, are objects.

* Objects are objects  
* Maths are objects  
* Functions are objects  
* Dates are objects  
* Arrays are objects  
* Maps are objects  
* Sets are objects


Objects are containers for Properties and Methods.

Properties are named Values.

Methods are Functions stored as Properties.

Properties can be primitive values, functions, or even other objects.

## JavaScript Primitives

JavaScript defines 7 types of primitive data types:

* string
* number
* boolean
* null
* undefined
* symbol
* bigint

__Immutable__  
Primitive values are immutable (they are hardcoded and cannot be changed).

## JavaScript Objects are Mutable
The object x is not a copy of person. The object x is person.

The object x and the object person share the same memory address.

Any changes to x will also change person:

```javascript
//Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Try to create a copy
const x = person;

// This will change age in person:
x.age = 10;
```
