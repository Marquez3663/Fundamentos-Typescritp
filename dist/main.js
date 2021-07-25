console.log('Hola Typescript con Platzi!');
//Number
//Explicito
var phone;
phone = 1;
phone = 54234567;
// phone = 'Hola'; // Error
//Inferido
var phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error de tipo de dato
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//Tipo Boolean
//Tipado explicito
var isPro;
isPro = true;
//Inferido
var isUserPro = false;
isUserPro = true;
//Strings
//Tipado explicito
var username = 'marquez3663';
username = 'Oliver';
//Template String
// Uso de back-tick "`"
var userInfo;
userInfo = "\n    User Info:\n    username: " + username + "\n    firstName: " + (username + ' Marquez') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n\n";
console.log('userInfo', userInfo);
