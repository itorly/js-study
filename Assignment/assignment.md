# JavaScript Logical Assignment Operators (ES2021)

| Operator | Name                      | Behavior                                                                 | Equivalent To         |
|----------|---------------------------|--------------------------------------------------------------------------|-----------------------|
| `&&=`    | Logical AND Assignment    | Assigns `y` to `x` **only if `x` is truthy**.                           | `x && (x = y)`        |
| `\|\|=`    | Logical OR Assignment     | Assigns `y` to `x` **only if `x` is falsy**.                           | `x \|\| (x = y)`        |
| `??=`    | Nullish Coalescing Assignment | Assigns `y` to `x` **only if `x` is `null` or `undefined`**.        | `x ?? (x = y)`        |

---

## Key Differences
- **`&&=`**: Works on **truthy** values (e.g., `1`, `"hello"`, `true`).
- **`||=`**: Works on **falsy** values (e.g., `0`, `""`, `false`, `null`, `undefined`).
- **`??=`**: Works **only** on `null` or `undefined`.

---

## Examples
### 1. `&&=` (Truthy Check)
```javascript
let a = 5;
a &&= 10; // a = 10 (5 is truthy)  
```

### 2. `||=` (Falsy Check)
```javascript
let b = 0;
b ||= 10; // b = 10 (0 is falsy)
```

### 3. `??=` (Nullish Check)
```javascript
let c = null;
c ??= 20; // c = 20 (null is nullish)
```

## Use Cases
* Default Values:
  ```javascript
  config.timeout ||= 5000; // Set default if falsy
  ```
* Initialization:
  ```javascript
  user.name ??= "Anonymous"; // Set if null/undefined
  ```
* Safe Property Assignment:
  ```javascript
  obj.value &&= obj.value.trim(); // Trim only if truthy
  ```
---
__Browser Support: ES2021+ (Modern browsers/Node.js 15+)__