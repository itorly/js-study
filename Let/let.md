
## Block Scope
1.Before ES6 (2015), JavaScript did not have Block Scope.  
2.JavaScript had Global Scope and Function Scope.  
3.ES6 introduced the two new JavaScript keywords: let and const.

## let
1.Variables declared with let must be Declared before use  
2.Variables declared with let cannot be Redeclared in the same scope



## Difference Between var, let and const
| Type  | Scope | Redeclare | Reassign | Hoisted | Binds this |
|-------|-------|-----------|----------|---------|------------|
| var   | Global| Yes       | Yes      | Yes     | Yes        |
| let   | Block | No        | Yes      | No      | No         |
| const | Block | No        | No       | No      | No         |

## Let Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time.

Variables defined with let are also hoisted to the top of the block, but not initialized.  
Meaning: Using a let variable before it is declared will result in a ReferenceError