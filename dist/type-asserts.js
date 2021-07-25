"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//<Tipo> // Angle Bracket syntax
var username;
username = 'oliv';
// tenemos una cadena, TS confia en mi!
var message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
console.log('message', message);
var usernameWithId = 'markedOlive 1';
// Como Obtener el username?
username = usernameWithId.substring(0, 11);
console.log('Username only', username);
//Sintaxis 'as'
message = username.length > 5 ? "Welcome " + username :
    "Welcome " + username;
'Username is too short';
var helloUser;
helloUser = 'Hello paparazzi';
username = helloUser.substring(6);
console.log('username', username);
