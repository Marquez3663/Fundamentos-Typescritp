"use strict";
// Explicita
let nullVarible;
nullVarible = null;
// nullVarible = 1; // Error!
let otherVarible = null;
otherVarible = 'test';
console.log('nullVariable', nullVarible);
console.log('otherVariable', otherVarible);
//Undefined
let undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error!
let otherUndefined = undefined;
otherUndefined = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);
// Null y Undefined: Como subtipos
// --strictNullChecks
let albumName;
// albumName = null;
// albumName = undefined;
