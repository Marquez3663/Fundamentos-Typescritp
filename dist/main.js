"use strict";
console.log('Hola Typescript con Platzi!');
//Number
//Explicito
let phone;
phone = 1;
phone = 54234567;
// phone = 'Hola'; // Error
//Inferido
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error de tipo de dato
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//Tipo Boolean
//Tipado explicito
let isPro;
isPro = true;
//Inferido
let isUserPro = false;
isUserPro = true;
//Strings
//Tipado explicito
let username = 'marquez3663';
username = 'Oliver';
//Template String
// Uso de back-tick "`"
let userInfo;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Marquez'}
    phone: ${phone}
    isPro: ${isPro}

`;
console.log('userInfo', userInfo);
