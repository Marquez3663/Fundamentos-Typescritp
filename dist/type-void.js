"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Void
// Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: "markedOlive", firstName: "Oliver" });
// Tipo inferido
function showFormattedInfo(user) {
    console.log('User Info', `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}

    `);
}
showFormattedInfo({ id: 1, username: "markedOlive", firstName: "Oliver" });
//Tipo void, como tipo de dato en una variable
let unusable;
// unusable = null;
unusable = undefined;
//Tipo:Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(`${message}, Code: ${code}`);
}
try {
    handleError(404, "Not Found");
}
catch (error) {
}
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sumNumbers(10);
//Ciclo infinito, programa que nunca termina
