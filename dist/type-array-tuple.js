"use strict";
// Corchetes []
// Tipo explicito
var users;
users = ['markedOlive', 'pararazzi', 'lensqueen'];
// users = [1, true, 'test'];// Error
//Tipo inferido
var otherUsers = ['markedOlive', 'pararazzi', 'lensqueen'];
// otherUsers = [1, true, 'test'];// Error
//Array<TIPO>
var pictureTitles;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
// Accediendo a los valores en un Array
console.log('first user', users[0]);
console.log('first title', pictureTitles[0]);
// Propiedades en Array 
console.log('users.length', users.length);
//Uso de funciones en Arrays 
users.push('aPlatziUser');
users.sort();
console.log('users', users);