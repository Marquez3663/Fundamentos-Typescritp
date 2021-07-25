// Explicita
var nullVarible;
nullVarible = null;
// nullVarible = 1; // Error!
var otherVarible = null;
otherVarible = 'test';
console.log('nullVariable', nullVarible);
console.log('otherVariable', otherVarible);
//Undefined
var undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error!
var otherUndefined = undefined;
otherUndefined = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);
// Null y Undefined: Como subtipos
// --strictNullChecks
var albumName;
albumName = null;
albumName = undefined;
