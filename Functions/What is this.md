
| Context                          | `this` Reference                                                                 |
|----------------------------------|---------------------------------------------------------------------------------|
| In an object method              | Refers to the object itself.                                                    |
| Alone                            | Refers to the global object (e.g., `window` in browsers).                       |
| In a function (non-strict mode)  | Refers to the global object.                                                    |
| In a function (strict mode)      | `undefined`.                                                                    |
| In an event                      | Refers to the element that received the event.                             |
| With `call()`, `apply()`, `bind()`| Can explicitly set `this` to refer to any specified object.                     |