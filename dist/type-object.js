"use strict";
// Tipo: objeto, Type: object
var user;
user = {}; //Object
user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
console.log('user', user);
// Object vs object(Clase de JS vs tipo de TS)
var myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
var isInstance = myObj instanceof Object; //clase Object de JavaScript
console.log('isInstance', isInstance);
console.log('myObj.username', myObj.username);
