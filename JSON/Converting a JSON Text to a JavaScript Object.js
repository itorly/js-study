let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);


console.log("obj:", obj);
console.log("--------------------------------------")
console.log("obj.employees:", obj.employees);
console.log("--------------------------------------")
console.log(obj.employees[0].firstName + " " + obj.employees[0].lastName);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);
console.log(obj.employees[2].firstName + " " + obj.employees[2].lastName);
