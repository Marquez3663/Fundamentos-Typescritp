console.log('Hola Typescript con Platzi!');

//Number
//Explicito
let phone: number;
phone = 1;
phone = 54234567;
// phone = 'Hola'; // Error

//Inferido
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error de tipo de dato

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//Tipo Boolean
//Tipado explicito
let isPro: boolean;
isPro = true;

//Inferido
let isUserPro = false;
isUserPro = true;

//Strings
//Tipado explicito
let username: string = 'marquez3663';
username = 'Oliver';

//Template String
// Uso de back-tick "`"
let userInfo: string;
userInfo= `
    User Info:
    username: ${username}
    firstName: ${username + ' Marquez'}
    phone: ${phone}
    isPro: ${isPro}

`;
console.log('userInfo', userInfo);