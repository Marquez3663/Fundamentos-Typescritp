export {};
//[1, 'user']
let user: [number, string];

user = [1, 'markedOlive'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

//Tuplas con varios valores
//Id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];
console.log('userInfo', userInfo);

//Arreglo de tuplas
let array: [number, string][] = [];
array.push([1, 'markedOlive']);//0
array.push([2, 'elnene']);//1
array.push([3, 'Polloasadogod']);//2
console.log('array', array);

//Uso de funciones Array
//Polloasadogod -> Polloasadogodess

array[2][1] = array[2][1].concat('ess')// Polloasadogodess
console.log('array', array);
