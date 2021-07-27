// Explicita
let nullVarible: null;
nullVarible = null;
// nullVarible = 1; // Error!

let otherVarible = null;
otherVarible = 'test';

console.log('nullVariable', nullVarible);
console.log('otherVariable', otherVarible);

//Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error!

let otherUndefined = undefined;
otherUndefined = 1;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);

// Null y Undefined: Como subtipos


// --strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;
