
// Primitive Types: Number, String, Boolean, Null, Undefined, Symbol Passed by value(by copy)
let a=10;
let b=a;
a=20;
console.log(a);
console.log(b);

// Reference Types: Objects, Arrays, Functions, Date, RegExp, Error, Map, Set, WeakMap, WeakSet Passed by reference
a={value:20};
b=a;
a.value=100;
console.log(a);
console.log(b);