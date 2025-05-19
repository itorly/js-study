## The () Operator
```javascript
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
let value1 = toCelsius(77); // 25
let value2 = toCelsius(); // NaN
let value3 = toCelsius; // function toCelsius(f) { return (5/9) * (f-32); }
```

**Note**  
As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.